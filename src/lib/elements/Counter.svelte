<script lang="ts">
    let {
        value,
        text
    }: {
        value: string;
        text: string;
    } = $props();
</script>
<div class="basis-full lg:basis-1/4">
    <p class="text-7xl font-semibold text-amber-600">{value}</p>
    <p class="text-lg">{text}</p>
</div>
