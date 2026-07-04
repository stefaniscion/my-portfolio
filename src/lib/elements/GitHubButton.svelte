<script lang="ts">
    import Button from "$lib/elements/Button.svelte";

    let {
        theme = "light"
    }: {
        theme?: "light" | "dark";
    } = $props();
</script>

<Button link="https://github.com/Stefaniscion" text="GitHub" icon="devicon-github-plain" theme={theme} />
