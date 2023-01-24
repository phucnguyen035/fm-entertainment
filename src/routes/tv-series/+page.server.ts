import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { prisma } }) => {
	const items = await prisma.item.findMany({ where: { category: 'TV Series' } });

	return { items };
}) satisfies PageServerLoad;
