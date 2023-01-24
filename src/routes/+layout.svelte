<script lang="ts">
	import { page } from '$app/stores';
	import IconNavBookmark from '$lib/components/IconNavBookmark.svelte';
	import IconNavHome from '$lib/components/IconNavHome.svelte';
	import IconNavMovies from '$lib/components/IconNavMovies.svelte';
	import IconNavTv from '$lib/components/IconNavTv.svelte';

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

<div class="flex flex-col p-4 md:p-6 lg:h-screen lg:flex-row lg:space-x-9 lg:p-8 lg:pr-0">
	<header
		class="-mx-4 -mt-4 h-14 flex-shrink-0 bg-blue-semi-dark md:mx-0 md:mt-0 md:h-[72px] md:rounded-[10px] lg:h-auto lg:w-24"
	>
		<nav class="flex h-full items-center px-4 lg:flex-col lg:py-8">
			<img src="/assets/logo.svg" alt="Logo" />

			<ul
				class="flex flex-grow justify-center space-x-6 md:space-x-8 lg:mt-[75px] lg:flex-col lg:items-center lg:justify-start lg:space-x-0 lg:space-y-10"
			>
				{#each navItems as { label, href, Icon }}
					<li>
						<a aria-label={label} {href} class="group inline-block h-5 w-5">
							<Icon active={$page.url.pathname === href} />
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

	<div class="h-auto lg:flex-grow lg:overflow-y-auto lg:pr-8">
		<main>
			<slot />
		</main>

		<footer class="mt-8 text-center">
			Made with ❤️ by
			<a
				href="https://github.com/phucnguyen035"
				target="_blank"
				rel="noopener noreferrer"
				class="font-bold text-red">Phuc Nguyen</a
			>
		</footer>
	</div>
</div>
