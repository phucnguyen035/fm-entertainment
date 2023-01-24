import { PrismaClient } from '@prisma/client';
import type { Handle } from '@sveltejs/kit';

export const handle = (({ event, resolve }) => {
	event.locals.prisma = new PrismaClient();

	return resolve(event);
}) satisfies Handle;
