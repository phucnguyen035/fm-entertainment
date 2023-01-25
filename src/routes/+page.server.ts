import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { prisma, getSession } }) => {
	const session = await getSession();
	const data = await prisma.item.findMany({
		include: {
			bookmarks: {
				where: {
					user: session?.user
				}
			}
		}
	});

	const items = data.map(({ bookmarks, ...rest }) => ({
		bookmarked: bookmarks.length > 0,
		...rest
	}));

	const trending = items.filter((item) => item.isTrending);

	return { items, trending, session: await getSession() };
}) satisfies PageServerLoad;
