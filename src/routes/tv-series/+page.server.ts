import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { prisma, getSession }, parent }) => {
	const { bookmarkSet } = await parent();
	const data = await prisma.item.findMany({ where: { category: 'TV Series' } });

	const items = data.map((item) => ({
		...item,
		bookmarked: bookmarkSet.has(item.id)
	}));

	return { items, session: await getSession() };
}) satisfies PageServerLoad;
