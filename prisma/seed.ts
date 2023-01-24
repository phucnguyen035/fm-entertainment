import { PrismaClient } from '@prisma/client';
import seed from '../data.json' assert { type: 'json' };

const prisma = new PrismaClient();

async function main() {
	const data = seed.map(({ isBookmarked: _, ...rest }) => ({ ...rest }));

	await prisma.item.deleteMany();
	await prisma.item.createMany({ data });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
