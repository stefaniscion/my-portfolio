<script lang="ts">
    import Button from "$lib/elements/Button.svelte";
    export let theme: "light" | "dark" = "light";
</script>

<Button link="https://calendly.com/stefaniscion/chiamata-introduttiva" text="Contattami ora!" icon="devicon-calendar-plain" theme={theme} />