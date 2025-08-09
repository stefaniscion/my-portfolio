
<svelte:head>
	<title>{title}</title>
	<!-- Script di caricamento gtag (può stare qui perché è solo il loader) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-PKN7TG90EK"></script>
</svelte:head>

<script lang="ts">
    import "../app.css";
    import "devicon/devicon.min.css";
    let title: string = "Stefano Di Pasquale | Software Engineer & Developer";

    import { onMount } from "svelte";

	onMount(() => {
		window.dataLayer = window.dataLayer || [];
		function gtag(){ dataLayer.push(arguments); }
		gtag('js', new Date());
		gtag('config', 'G-PKN7TG90EK');
	});
</script>

<slot/>
