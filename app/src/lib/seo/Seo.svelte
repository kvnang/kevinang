<script lang="ts">
	import { page } from '$app/stores';
	import { config } from '$lib/config';
	import { removeLeadingSlash } from '$lib/utils';

	const { siteUrl } = config;

	export let title = 'Full-Stack Web Developer';
	export let description = `I'm a full-stack web developer from Indonesia who enjoys tinkering with JS, IoT, and the edge.`;
	export let socialCard = `${siteUrl}/social-card.jpg`;
	export let canonical = `${siteUrl}/${removeLeadingSlash($page.url.pathname)}`;

	const siteName = 'Kevin Ang';
	const isHome = $page.url.pathname === '/';
</script>

<svelte:head>
	<title>{isHome ? `${siteName} • ${title}` : `${title} • ${siteName}`}</title>
	<meta name="description" content={description} />

	<!-- Favicons -->
	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="/apple-touch-icon-57x57.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114.png" />
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72x72.png" />
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144.png" />
	<link rel="apple-touch-icon-precomposed" sizes="60x60" href="/apple-touch-icon-60x60.png" />
	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="/apple-touch-icon-120x120.png" />
	<link rel="apple-touch-icon-precomposed" sizes="76x76" href="/apple-touch-icon-76x76.png" />
	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="/apple-touch-icon-152x152.png" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" href="/favicon-196x196.png" sizes="196x196" />
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
	<link rel="icon" type="image/png" href="/favicon-128.png" sizes="128x128" />
	<meta name="application-name" content="&nbsp;" />
	<meta name="msapplication-TileColor" content="#FFFFFF" />
	<meta name="msapplication-TileImage" content="mstile-144x144.png" />
	<meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
	<meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
	<meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
	<meta name="msapplication-square310x310logo" content="mstile-310x310.png" />

	<!-- Canonical -->
	<link rel="canonical" href={canonical} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={socialCard} />
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />

	<!-- Twitter -->
	<meta property="twitter:title" content={title} />
	<meta property="twitter:url" content={canonical} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:image" content={socialCard} />
</svelte:head>
