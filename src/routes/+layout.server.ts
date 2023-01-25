import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { prisma, getSession } }) => {
	const session = await getSession();
	const bookmarks = await prisma.bookmark.findMany({
		where: { userId: session?.user?.id ?? '' },
		select: { itemId: true }
	});

	const bookmarkSet = new Set(bookmarks.map(({ itemId }) => itemId));

	return { bookmarkSet };
}) satisfies LayoutServerLoad;
