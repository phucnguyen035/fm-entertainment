<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import SearchWrapper from '$lib/components/SearchWrapper.svelte';
	import Section from '$lib/components/Section.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<SearchWrapper searchData={data.items} placeholder="Search for TV series">
	<Section items={data.items} title="TV Series" />
</SearchWrapper>

<Meta title="TV Series" />
