import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { prisma } }) => {
	const items = await prisma.item.findMany();
	const trending = items.filter((item) => item.isTrending);

	return { items, trending };
}) satisfies PageServerLoad;
