import { z } from 'zod';

export const BookmarkPayload = z.object({
	itemId: z.number().positive()
});
export type BookmarkPayload = z.infer<typeof BookmarkPayload>;
