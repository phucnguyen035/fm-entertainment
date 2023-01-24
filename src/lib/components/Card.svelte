<script lang="ts">
	import { getImageThumbnailUrl } from '$lib/utils/getThumbnailUrl';
	import type { Item } from '@prisma/client';
	import ButtonBookmark from './ButtonBookmark.svelte';

	export let item: Item;
	export let bookmarked = false;
</script>

<div class="group relative">
	<div
		class="absolute inset-0 -z-10 grid place-items-center bg-blue-dark/0 transition-colors group-hover:z-10 group-hover:bg-blue-dark/50"
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

	<div class="mb-2 overflow-hidden rounded-lg">
		<img
			src={getImageThumbnailUrl(item.thumbnail)}
			alt={item.title}
			class="transition-transform duration-500 group-hover:scale-110"
		/>
	</div>

	<div class="absolute right-2 top-2 z-20">
		<ButtonBookmark {bookmarked} on:click />
	</div>
</div>

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

<h2 class="mb-1 text-base font-medium">{item.title}</h2>
