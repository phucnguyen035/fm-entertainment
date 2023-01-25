<script lang="ts">
	import SearchWrapper from '$lib/components/SearchWrapper.svelte';
	import Section from '$lib/components/Section.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: movies = data.items.filter((item) => item.category === 'Movie');
	$: tvs = data.items.filter((item) => item.category === 'TV Series');
</script>

<SearchWrapper searchData={data.items} placeholder="Search for bookmarked shows">
	<Section items={movies} title="Bookmarked Movies" />
	<Section items={tvs} title="Bookmarked TV Series" />
</SearchWrapper>
