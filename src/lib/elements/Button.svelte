<script lang="ts">
    type Theme = "light" | "dark";

    let {
        icon,
        text,
        link,
        theme = "light"
    }: {
        icon: string;
        text: string;
        link: string;
        theme?: Theme;
    } = $props();

    let className = $derived(
        theme === "dark"
            ? "bg-neutral-950 text-neutral-100 hover:bg-neutral-100 hover:text-neutral-950 px-5 py-3 rounded-lg transition duration-300 text-xl cursor-pointer"
            : "bg-amber-600 text-neutral-100 hover:bg-neutral-950 hover:text-neutral-100 px-5 py-3 rounded-lg transition duration-300 text-xl cursor-pointer"
    );
</script>

<a
    target="_blank"
    href="{link}">
    <button class={className}> 
        {#if icon}<i class="{icon}"></i>{/if} 
        {text}
    </button>
</a>
