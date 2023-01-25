<script>
	export let title = '';
	export let description = 'Entertainment web app';
</script>

<svelte:head>
	{#if title}
		<title>{title} - Entertainment</title>
	{:else}
		<title>Entertainment Web App</title>
	{/if}
	<meta name="description" content={description} />
</svelte:head>
