import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { prisma, getSession }, parent }) => {
	const [data, { bookmarkSet }] = await Promise.all([prisma.item.findMany(), parent()]);

	const items = data.map((item) => ({
		...item,
		bookmarked: bookmarkSet.has(item.id)
	}));

	const trending = items.filter((item) => item.isTrending);

	return { items, trending, session: await getSession() };
}) satisfies PageServerLoad;
