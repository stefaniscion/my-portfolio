<section class="bg-neutral-800 text-neutral-100 py-10">
    <div class="container mx-auto grid grid-cols-2">
        <div class="col-span-1">
            <h1 class="text-5xl">Full Stack Developer</h1>
            <p>Developer</p>
        </div>
        <div class="col-span-1">
            <img src="" alt="Stefano Di Pasquale - Full Stack Developer">
        </div>
    </div>
</section>
<section class="bg-neutral-950 text-neutral-100 py-10">
    <div class="container mx-auto grid-cols-2">
        <h1>Developer</h1>
    </div>
</section>
<section class="bg-neutral-700 text-neutral-100 py-10">
    <div class="container mx-auto grid-cols-2">
    <h1>Developer</h1>
    </div>
</section>
<section class="bg-neutral-950 text-neutral-100 py-10">
    <div class="container mx-auto grid-cols-2">
        <p>Questa pagina ha impiegato <span class="text-bold">{load_time}</span> ms per caricarsi</p>
    </div>
</section>

<script>
    import { onMount } from 'svelte';
    let load_time = null;
    onMount(() => {
        load_time = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
    });
</script>