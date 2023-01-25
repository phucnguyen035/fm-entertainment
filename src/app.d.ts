// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			prisma: import('@prisma/client').PrismaClient;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module '@auth/core/types' {
	interface Session {
		user?: {
			id: string;
			name?: string | null;
			email?: string | null;
			image?: string | null;
		};
		expires: string;
	}
}

export {};
