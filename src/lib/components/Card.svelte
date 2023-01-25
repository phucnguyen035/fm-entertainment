<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { BookmarkPayload } from '$lib/schemas';
	import { getImageThumbnailUrl } from '$lib/utils/getThumbnailUrl';
	import type { Item } from '@prisma/client';
	import ButtonBookmark from './ButtonBookmark.svelte';

	export let item: Item & { bookmarked: boolean };
	export let type: 'default' | 'trending' = 'default';

	$: trending = type === 'trending';

	async function toggleBookmark() {
		const payload: BookmarkPayload = {
			itemId: item.id
		};

		const res = await fetch('/api/bookmark', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!res.ok) {
			console.error(res.statusText);
			return;
		}

		await invalidateAll();
	}
</script>

<div class:trending class="group relative">
	<div class:mb-2={!trending} class="relative overflow-hidden rounded-lg">
		<div
			class="absolute inset-0 -z-10 grid place-items-center overflow-hidden bg-blue-dark/0 transition-colors group-hover:z-10 group-hover:bg-blue-dark/50"
		>
			<button class="flex items-center rounded-3xl bg-white/25 p-2.5">
				<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"
					><path
						d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
						fill="#FFF"
					/></svg
				>
				<span class="inline-block flex-grow px-5 text-center text-heading-xs">Play</span>
			</button>
		</div>

		<img
			loading="lazy"
			src={getImageThumbnailUrl(item.thumbnail, trending ? 'trending' : 'regular', 'large')}
			alt={item.title}
			width={240}
			height={140}
			class:trending
			class="w-full transition-transform duration-500 group-hover:scale-110 motion-reduce:group-hover:scale-100 lg:min-w-[280px]"
		/>
	</div>

	<div class="absolute right-2 top-2 z-20">
		<ButtonBookmark bookmarked={item.bookmarked} on:click={toggleBookmark} />
	</div>

	<div class:trending-info-wrapper={trending} class="left-4 overflow-hidden md:left-6">
		<div class:trending-info={trending}>
			<ul class="flex list-disc gap-x-5 text-small text-white/75">
				<li class="list-none">{item.year}</li>
				<li>
					<div class="flex gap-x-1.5">
						<div class="h-3 w-3 flex-shrink-0 pt-0.5">
							{#if item.category === 'Movie'}
								<img src="/assets/icon-category-movie.svg" alt="Movie" width={12} height={12} />
							{:else}
								<img src="/assets/icon-category-tv.svg" alt="TV Series" width={12} height={12} />
							{/if}
						</div>

						<span>{item.category}</span>
					</div>
				</li>
				<li>{item.rating}</li>
			</ul>

			<h2 class:md:text-heading-s={trending} class="mb-1 text-base font-medium">{item.title}</h2>
		</div>
	</div>
</div>

<style lang="postcss">
	.trending {
		@apply h-[140px] w-60 overflow-hidden rounded-lg md:h-[230px] md:w-[470px];
	}

	.trending-info {
		@apply rounded-lg bg-blue-dark/30 p-2 opacity-100 [transition:transform_500ms,opacity_200ms] group-hover:translate-y-14 group-hover:opacity-0 motion-reduce:transition-none;

		&-wrapper {
			@apply absolute bottom-0 pb-4 md:pb-6;
		}
	}
</style>
