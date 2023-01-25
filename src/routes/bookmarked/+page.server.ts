import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { prisma, getSession } }) => {
	const session = await getSession();

	if (!session) {
		return { items: [], session };
	}

	const data = await prisma.item.findMany({
		where: {
			bookmarks: {
				some: {
					user: session.user
				}
			}
		}
	});

	const items = data.map((item) => ({ bookmarked: true, ...item }));

	return { items, session };
}) satisfies PageServerLoad;
