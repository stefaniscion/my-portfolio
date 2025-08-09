
<script lang="ts">
    export let name: string;
    export let icon: string;
    export let link: string;
</script>

<a
    href="{link}"
    target="_blank"
    aria-label="{name}"
    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-600 text-neutral-100 transition-colors duration-300 shadow hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
>
    <i class="{icon} text-xl"></i>
</a>