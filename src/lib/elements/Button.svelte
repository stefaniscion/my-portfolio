<script lang="ts">
    export let icon: string;
    export let text: string;
    export let link: string;
    export let theme: "light" | "dark" = "light";

    let className: string;
    if (theme == "light") {
        className = "bg-amber-600 text-neutral-100 hover:bg-neutral-950 hover:text-neutral-100 px-5 py-3 rounded-lg transition duration-300 text-xl cursor-pointer"; // Adjusted for light theme
    }
    else if (theme == "dark") {
        className = "bg-neutral-950 text-neutral-100 hover:bg-neutral-100 hover:text-neutral-950 px-5 py-3 rounded-lg transition duration-300 text-xl cursor-pointer"; // Adjusted for dark theme
    }
</script>

<a
    target="_blank"
    href="{link}">
    <button class={className}> 
        {#if icon}<i class="{icon}"></i>{/if} 
        {text}
    </button>
</a>