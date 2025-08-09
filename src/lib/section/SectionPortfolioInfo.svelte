<!-- Portfolio info -->
<script lang="ts">
    import { onMount } from 'svelte';
    let load_time: number = 0;
    onMount(() => {
        const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
        load_time = navigationEntry.domContentLoadedEventEnd - navigationEntry.startTime;
    });
</script>
<section class="bg-neutral-950 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 grid-cols-2">
        <div class="flex mb-5 flex-wrap">
            <div class="grow"><h2 class="text-5xl mb-5 font-semibold">Questo <span class="text-amber-600">portfolio</span> è scritto con:</h2></div>
            <div class="flex text-neutral-100">
                <div><i class="devicon-svelte-plain text-7xl"></i></div>
                <div><i class="devicon-tailwindcss-plain text-7xl"></i></div>
                <div><i class="devicon-linux-plain text-7xl"></i></div>
            </div>
        </div>
        <p>
            <span class="text-amber-600 font-semibold">Swoosh!</span> 🚀 Questo portfolio ha impiegato <span class="text-amber-600 font-semibold">{load_time} ms</span> per caricarsi totalmente! 
            La media mondiale di caricamento è di <span class="text-amber-600 font-semibold">2.5 s su desktop e di 8.6 s su mobile</span>. 
            <a class="text-amber-600 underline hover:text-neutral-100 transition duration-300" target="_blank" href="https://www.tooltester.com/en/blog/website-loading-time-statistics/"><sup>[1]</sup></a> 
            La performance di un sito è cruciale per il conversion rate dello stesso! 
            <a class="text-amber-600 underline hover:text-neutral-100 transition duration-300" target="_blank" href="https://www.thinkwithgoogle.com/intl/it-it/strategie/app-e-mobile/importanza-velocita-sito-mobile-test-my-site/"><sup>[2]</sup></a>
            La scelta frontend di Svelte e TailwindCSS è stata fatta, tra le varie, per garantire la massima performance possibile!
        </p>
    </div>
</section>