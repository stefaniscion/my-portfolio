<script lang="ts">
    import Button from "$lib/elements/Button.svelte";

    let {
        theme = "light"
    }: {
        theme?: "light" | "dark";
    } = $props();
</script>

<Button link="https://calendly.com/stefaniscion/chiamata-introduttiva" text="Contattami ora!" icon="devicon-calendar-plain" theme={theme} />
