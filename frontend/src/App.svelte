<script>
	import apolloClient from "./svelte-apollo.js";
	import { setClient, getClient, query } from "./svelte-apollo.js";
	import { GET_PROJECTS } from "./query.js";

	setClient(apolloClient);
	const client = getClient();
	const projects = query(client, { query: GET_PROJECTS })
</script>

<!-- Fathom - simple website analytics - https://github.com/usefathom/fathom -->
<script>
(function(f, a, t, h, o, m){
	a[h]=a[h]||function(){
		(a[h].q=a[h].q||[]).push(arguments)
	};
	o=f.createElement('script'),
	m=f.getElementsByTagName('script')[0];
	o.async=1; o.src=t; o.id='fathom-script';
	m.parentNode.insertBefore(o,m)
})(document, window, '//137.184.6.67/tracker.js', 'fathom');
fathom('set', 'siteId', 'NUCOW');
fathom('trackPageview');
</script>
<!-- / Fathom -->

<main>
	<h1>Blue Dojo Dev</h1>
	<div>
		{#await $projects}
			{:then result}
			{#each result.data.projects as project (project.id)}
				<div>
					<h2>{article.title}</h2>
					<section>
						{article.content}
					</section>
				</div>
			{:else}
				<div> No articles found</div>
			{/each}
		{:catch error}
			<div>Error loading articles: {error}</div>
		{/await}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
