<script lang="ts">
    import "../app.css";
    import "devicon/devicon.min.css";

    let { children } = $props();
    let title: string = "Stefano Di Pasquale | Software Engineer & Developer";
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{@render children()}
