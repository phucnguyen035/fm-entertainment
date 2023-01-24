import z from 'zod';

const ThumbnailBase = z.object({
	large: z.string(),
	medium: z.string(),
	small: z.string()
});

const Thumbnail = z.object({
	regular: ThumbnailBase,
	trending: ThumbnailBase.partial({ medium: true }).optional()
});

export function getImageThumbnailUrl(
	thumbnail: unknown,
	type: z.infer<ReturnType<typeof Thumbnail.keyof>> = 'regular',
	size: z.infer<ReturnType<typeof ThumbnailBase.keyof>> = 'medium'
) {
	const result = Thumbnail.safeParse(thumbnail);
	if (!result.success) {
		return '';
	}

	return result.data[type]?.[size]?.replace('./', '/') ?? '';
}
