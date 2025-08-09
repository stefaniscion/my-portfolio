<script lang="ts">
    import Button from "$lib/elements/Button.svelte";
    export let theme: "light" | "dark" = "light";
</script>

<Button link="https://github.com/Stefaniscion" text="GitHub" icon="devicon-github-plain" theme={theme} />