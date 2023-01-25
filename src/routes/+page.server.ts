import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { prisma, getSession } }) => {
	const session = await getSession();

	const items = await prisma.item.findMany({
		include: {
			bookmarks: {
				where: {
					user: session?.user
				}
			}
		}
	});

	const trending = items.filter((item) => item.isTrending);

	return { items, trending, session: await getSession() };
}) satisfies PageServerLoad;
