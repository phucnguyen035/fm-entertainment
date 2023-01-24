<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export let type: HTMLButtonAttributes['type'] = 'button';
	export let padding: 'normal' | 'small' = 'normal';
	export let fullWidth = false;
</script>

<button
	{type}
	class:w-full={fullWidth}
	class:py-2={padding === 'small'}
	class="rounded-md bg-red p-3.5 text-center"
	on:click
>
	<slot />
</button>
