<script lang="ts">
    let {
        name,
        url
    }: {
        name: string;
        url: string;
    } = $props();
</script>

<img class="w-full p-2 basis-1/2 sm:basis-1/4" alt={name} src={url}>
