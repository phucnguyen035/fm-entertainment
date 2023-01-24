<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { getImageThumbnailUrl } from '$lib/utils/getThumbnailUrl';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="space-y-4">
	<section>
		<h1 class="text-heading-l">Trending</h1>

		<ul>
			{#each data.trending as item (item.id)}
				<li>
					<h3>{item.title}</h3>
					<img src={getImageThumbnailUrl(item.thumbnail)} alt={item.title} />
				</li>
			{:else}
				<li>
					<p>There are no items</p>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h1 class="text-heading-l">Recommended for you</h1>

		<ul
			class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-[30px] md:gap-y-6 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8"
		>
			{#each data.items as item (item.id)}
				<li>
					<Card {item} />
				</li>
			{:else}
				<li>
					<p>There are no trending items</p>
				</li>
			{/each}
		</ul>
	</section>
</div>
