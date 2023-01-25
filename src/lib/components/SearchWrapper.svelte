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

<label class="outline-nonemd:gap-x-7 my-8 inline-flex gap-x-4">
	<div>
		<img src="/assets/icon-search.svg" alt="Search" />
	</div>
	<input
		bind:value={search}
		type="text"
		class="border-b-2 border-blue-grey/0 bg-blue-dark pb-3.5 text-white caret-red focus:border-blue-grey focus:outline-none md:text-heading"
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
