<script lang="ts">
	import SearchWrapper from '$lib/components/SearchWrapper.svelte';
	import Section from '$lib/components/Section.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<SearchWrapper searchData={data.items}>
	<div class="space-y-4">
		<Section items={data.trending} title="Trending" type="trending" />
		<Section items={data.items} title="Recommended for you" />
	</div>
</SearchWrapper>
