<script lang="ts">
	import type { Bookmark, Item } from '@prisma/client';
	import { fade } from 'svelte/transition';
	import Card from './Card.svelte';

	export let items: Array<Item & { bookmarks: Bookmark[] }>;
	export let title: string;
	export let type: Card['$$prop_def']['type'] = 'default';

	$: trending = type === 'trending';
</script>

<section class="space-y-6">
	<h1 class="text-heading-l">{title}</h1>

	<ul class:trending class:default={!trending}>
		{#each items as item, index (item.id)}
			<li in:fade={{ delay: index * 100, duration: 100 }} out:fade={{ duration: 100 }}>
				<Card {item} {type} />
			</li>
		{:else}
			<li>
				<p>There are no items</p>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.trending {
		@apply flex gap-x-4 overflow-scroll;
	}

	.default {
		@apply grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-[30px] md:gap-y-6 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8;
	}
</style>
