import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { BookmarkPayload } from '$lib/schemas';

export const POST = (async ({ locals: { getSession, prisma }, request }) => {
	const session = await getSession();
	if (!session || !session.user?.email) {
		throw error(401, 'Unauthorized');
	}

	const data = await request.json();
	const result = BookmarkPayload.safeParse(data);
	if (!result.success) {
		throw error(400, 'Bad Request');
	}

	const user = await prisma.user.findUnique({
		where: { email: session.user.email },
		select: { id: true }
	});
	if (!user) {
		throw error(401, 'Unauthorized');
	}

	const existingBookmark = await prisma.bookmark.findUnique({
		where: {
			userId_itemId: {
				itemId: result.data.itemId,
				userId: user.id
			}
		}
	});

	if (existingBookmark) {
		await prisma.bookmark.delete({
			where: {
				userId_itemId: {
					itemId: result.data.itemId,
					userId: user.id
				}
			}
		});
	} else {
		await prisma.bookmark.create({
			data: {
				itemId: result.data.itemId,
				userId: user.id
			}
		});
	}

	return json({ ok: true });
}) satisfies RequestHandler;
