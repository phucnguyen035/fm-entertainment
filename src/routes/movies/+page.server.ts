import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { prisma } }) => {
	const items = await prisma.item.findMany({ where: { category: 'Movie' } });

	return { items };
}) satisfies PageServerLoad;
