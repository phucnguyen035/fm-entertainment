<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import SearchWrapper from '$lib/components/SearchWrapper.svelte';
	import Section from '$lib/components/Section.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<SearchWrapper searchData={data.items}>
	<Section items={data.trending} title="Trending" type="trending" />
	<Section items={data.items} title="Recommended for you" />
</SearchWrapper>

<Meta title="Home" />
