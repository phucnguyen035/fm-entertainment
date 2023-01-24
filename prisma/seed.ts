import { PrismaClient } from '@prisma/client';
import seed from '../data.json' assert { type: 'json' };

(async () => {
	const prisma = new PrismaClient();

	try {
		console.log('running');

		const data = seed.map(({ isBookmarked: _, ...rest }) => ({ ...rest }));

		await prisma.item.deleteMany();
		await prisma.item.createMany({ data });
	} catch (error) {
		console.error(error);
	} finally {
		prisma.$disconnect();
	}
})();
