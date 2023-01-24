<script lang="ts">
	import { page } from '$app/stores';
	import IconNavBookmark from '$lib/components/IconNavBookmark.svelte';
	import IconNavHome from '$lib/components/IconNavHome.svelte';
	import IconNavMovies from '$lib/components/IconNavMovies.svelte';
	import IconNavTv from '$lib/components/IconNavTv.svelte';
	import cx from 'classix';

	import '@fontsource/outfit';
	import '../app.postcss';
	import Button from '$lib/components/Button.svelte';

	const navItems = [
		{ label: 'Home', Icon: IconNavHome, href: '/' },
		{ label: 'Bookmarked', Icon: IconNavBookmark, href: '/bookmarked' },
		{ label: 'Movies', Icon: IconNavMovies, href: '/movies' },
		{ label: 'TV Series', Icon: IconNavTv, href: '/tv-series' }
	] as const;
</script>

<header class="h-14 bg-blue-semi-dark md:h-[72px] lg:h-auto">
	<nav class="flex h-full items-center px-4">
		<img src="/assets/logo.svg" alt="Logo" />

		<ul class="flex flex-grow justify-center space-x-6 md:space-x-8">
			{#each navItems as { label, href, Icon }}
				<li>
					<a aria-label={label} {href} class="group inline-block h-5 w-5">
						<Icon
							class={cx(
								'fill-blue-grey transition-colors group-hover:fill-white',
								$page.url.pathname === href && 'fill-white'
							)}
						/>
					</a>
				</li>
			{/each}
		</ul>

		<div>
			<Button fullWidth padding="small">Sign in</Button>
			<!-- <img
				src="."
				alt="User avatar"
				class="grid h-6 w-6 place-items-center rounded-full border border-white"
			/> -->
		</div>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>Made with ❤️</footer>
