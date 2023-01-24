<script lang="ts">
	import { getImageThumbnailUrl } from '$lib/utils/getThumbnailUrl';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="space-y-4">
	<h1 class="text-4xl font-bold text-emerald-500">Welcome to SvelteKit</h1>

	<section>
		<h2 class="text-3xl font-semibold text-emerald-500">Movies and TV Shows</h2>

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
		<h2 class="text-3xl font-semibold text-emerald-500">Trending items</h2>

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
