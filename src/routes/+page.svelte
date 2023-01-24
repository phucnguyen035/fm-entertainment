<script lang="ts">
	import { getImageThumbnailUrl } from '$lib/utils/getThumbnailUrl';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="space-y-4">
	<h1 class="text-emerald-500 text-4xl font-bold">Welcome to SvelteKit</h1>

	<section>
		<h2 class="text-heading-l">Movies and TV Shows</h2>

		<ul>
			{#each data.items as item (item.id)}
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
		<h2 class="text-emerald-500 text-3xl font-semibold">Trending items</h2>

		<ul>
			{#each data.trending as item (item.id)}
				<li>
					<h3>{item.title}</h3>
					<img src={getImageThumbnailUrl(item.thumbnail)} alt={item.title} />
				</li>
			{:else}
				<li>
					<p>There are no trending items</p>
				</li>
			{/each}
		</ul>
	</section>
</div>
