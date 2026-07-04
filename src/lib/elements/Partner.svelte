<script lang="ts">
    let {
        name,
        url
    }: {
        name: string;
        url: string;
    } = $props();
</script>

<div class="basis-1/2 sm:basis-1/4 p-4">
    <div class="flex h-28 sm:h-32 items-center justify-center">
        <img class="max-h-full max-w-full object-contain" alt={name} src={url}>
    </div>
</div>
