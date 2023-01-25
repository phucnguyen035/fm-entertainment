<script lang="ts">
	import type { Item } from '@prisma/client';
	import Section from './Section.svelte';

	export let searchData: Array<Item & { bookmarked: boolean }>;
	export let placeholder = 'Search for movies or TV series';

	let search = '';

	$: filteredItems = searchData.filter((item) => {
		return search && item.title.toLowerCase().includes(search.toLowerCase());
	});
</script>

<label class="my-8 flex h-6 gap-x-4 outline-none md:h-8 md:gap-x-7">
	<img src="/assets/icon-search.svg" alt="Search" />
	<input
		bind:value={search}
		type="text"
		class="bg-blue-dark text-white focus:outline-none md:text-heading"
		{placeholder}
	/>
</label>

{#if search}
	<Section items={filteredItems} title={`Found ${filteredItems.length} results for '${search}'`} />
{:else}
	<div class="space-y-4">
		<slot />
	</div>
{/if}
