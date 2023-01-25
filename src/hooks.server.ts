import { dev } from '$app/environment';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import type { Provider } from '@auth/core/providers';
import GitHub from '@auth/core/providers/github';
import { SvelteKitAuth } from '@auth/sveltekit';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const prisma = new PrismaClient({
	log: dev ? ['query', 'info', 'warn', 'error'] : ['error']
});

const connectPrisma = (({ event, resolve }) => {
	event.locals.prisma = prisma;

	return resolve(event);
}) satisfies Handle;

export const handle = sequence(
	connectPrisma,
	SvelteKitAuth({
		adapter: PrismaAdapter(prisma),
		providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }) as Provider],
		trustHost: true,
		callbacks: {
			async session({ session, user }) {
				session = {
					...session,
					user: {
						...session.user,
						id: user.id
					}
				};
				return session;
			}
		}
	})
);
