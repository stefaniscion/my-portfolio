<script lang="ts">
    import Skill from "$lib/skill.svelte";
    import { onMount } from 'svelte';
    let load_time: number = 0;
    let experience_years: number = new Date().getFullYear() - 2017;
    let production_hours: number = Math.ceil(((new Date() - new Date('1/1/2017'))/ (1000 * 60 * 60 * 24)) * 5.7 / 1000);
    let production_coffes: number = Math.ceil(((new Date() - new Date('1/1/2017'))/ (1000 * 60 * 60 * 24)) * 1.5);
    onMount(() => {
        load_time = performance.getEntriesByType("navigation")[0].domContentLoadedEventEnd - performance.getEntriesByType("navigation")[0].startTime;
    });
</script>


<!-- Header -->
<section class="bg-neutral-800 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3">
        <div class="col-span-2">
            <h1 class="text-amber-600 text-7xl font-semibold">Stefano Di Pasquale</h1>
            <h2 class="text-5xl mb-5 font-semibold">Full Stack Developer 💻</h2>
            <p class="text-lg">Sono un <span class="bg-neutral-700 px-1 py-0.5 rounded text-amber-600">Full Stack Developer</span> con <span class="bg-neutral-700 px-1 py-0.5 rounded text-amber-600">{experience_years} anni di esperienza</span>.<br>
                Ho una forte <span class="bg-neutral-700 px-1 py-0.5 rounded text-amber-600">passione per l'informatica</span> e la uso nel mio lavoro di sviluppo.<br>
                Sono qui per creare <span class="bg-neutral-700 px-1 py-0.5 rounded text-amber-600">soluzioni innovative</span> e portare in vita le tue idee digitali!</p>
        </div>
        <div class="col-span-1">
            <img class="text-align-right" src="" alt="Stefano Di Pasquale - Full Stack Developer">
        </div>
    </div>
</section>

<!-- Counters -->
<section class="bg-neutral-950 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between text-center">
            <div class="basis-full lg:basis-1/4">
                <p class="text-7xl font-semibold text-amber-600">{experience_years}</p>
                <p>Anni di esperienza</p>
            </div>
            <div class="basis-full lg:basis-1/4">
                <p class="text-7xl font-semibold text-amber-600">50+</p>
                <p>Consulenze effettuate</p>
            </div>
            <div class="basis-full lg:basis-1/4">
                <p class="text-7xl font-semibold text-amber-600">{production_hours}K</p>
                <p>Ore di sviluppo svolte per i miei clienti</p>
            </div>
            <div class="basis-full lg:basis-1/4">
                <p class="text-7xl font-semibold text-amber-600">{production_coffes}</p>
                <p>Caffè consumati in produzione</p>
            </div>
        </div>
    </div>
</section>

<!-- My Work -->
<section class="bg-neutral-800 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-5xl mb-5 font-semibold">Mi <span class="text-amber-600">occupo</span> di...</h2>
        <div class="flex flex-wrap justify-between text-center mb-5">
            <div class="basis-full mb-5 lg:basis-1/3 lg:px-5">
                <h3 class="text-3xl mb-5 font-semibold"><span class="text-amber-600">Software</span> Enginering 🖥️</h3>
                <p>La programmazione è l'arte di creare il futuro! Se hai bisogno di sviluppare software di alta qualità su misura per le tue esigenze, sono qui per te. Con anni di esperienza nel campo, posso trasformare le tue idee in codice impeccabile.</p>
            </div>
            <div class="basis-full mb-5 lg:basis-1/3 lg:px-5">
                <h3 class="text-3xl mb-5 font-semibold"><span class="text-amber-600">Web</span> Development 🌐</h3>
                <p>Vuoi un sito web che catturi l'attenzione e offra un'esperienza utente straordinaria? Sono esperti nello sviluppo web e posso trasformare la tua visione in una realtà digitale. Dal design all'implementazione, sono qui per te!</p>
            </div>
            <div class="basis-full mb-5 lg:basis-1/3 lg:px-5">
                <h3 class="text-3xl mb-5 font-semibold"><span class="text-amber-600">Linux Sys</span> Administration 🐧</h3>
                <p>Se hai bisogno di un esperto in amministrazione di sistemi Linux per gestire i tuoi server e assicurarti che tutto funzioni in modo efficiente e sicuro, sono qui per te. Posso occuparmi di installazioni, configurazioni, patching e monitoraggio dei tuoi sistemi Linux.</p>
            </div>
        </div>
        <h2 class="text-5xl mb-5 font-semibold">Le mie <span class="text-amber-600">main skills</span></h2>
        <div class="flex flex-row flex-wrap">
            <Skill name="Python" level="100" icon="devicon-python-plain" basis="basis-full lg:basis-1/3"/>
            <Skill name="Linux" level="90" icon="devicon-linux-plain" basis="basis-full lg:basis-1/3"/>
            <Skill name="PHP" level="90" icon="devicon-php-plain" basis="basis-full lg:basis-1/3"/>
            <Skill name="Docker" level="80" icon="devicon-docker-plain" basis="basis-full lg:basis-1/5"/>
            <Skill name="Javascript" level="80" icon="devicon-javascript-plain" basis="basis-full lg:basis-1/5"/>
            <Skill name="TypeScript" level="70" icon="devicon-typescript-plain" basis="basis-full lg:basis-1/5"/>
            <Skill name="C++" level="40" icon="devicon-cplusplus-plain" basis="basis-full lg:basis-1/5"/>
            <Skill name="Rust" level="40" icon="devicon-rust-plain" basis="basis-full lg:basis-1/5"/>
        </div>

    </div>
</section>

<!-- Partners -->
<section class="bg-neutral-950 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4">
        <h2 class="text-5xl mb-5 text-center font-semibold"><span class="text-amber-600">Ho lavorato</span> con</h2>
        <div class="flex flex-wrap justify-between">
            <img class="w-full basis-1/2 sm:basis-1/5" alt="Aeronautica Militare" src="logo/aeronautica_militare.png">
            <img class="w-full basis-1/2 sm:basis-1/5" alt="Anas" src="logo/anas.png">
            <img class="w-full basis-1/2 sm:basis-1/5" alt="Altran" src="logo/altran.png">
            <img class="w-full basis-1/2 sm:basis-1/5" alt="Dedagroup" src="logo/dedagroup.png">
            <img class="w-full basis-1/2 sm:basis-1/5" alt="Giddierre" src="logo/giddierre.png">
        </div>
    </div>
</section>

<!-- About -->
<section class="bg-neutral-800 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3">
        <div class="col-span-1 text-align-center">
            <img class="mx-auto" src="" alt="Stefano Di Pasquale - Full Stack Developer">
            <div class="flex space-x-3 justify-center">
                <i class="devicon-linkedin-plain text-2xl"></i> 
                <i class="devicon-github-plain text-2xl"></i> 
            </div>
        </div>
        <div class="col-span-2">
            <h2 class="text-5xl mb-5 font-semibold"><span class="text-amber-600">Chi</span> sono</h2>
            <p class="mb-2 text-lg">👋 Sono un Full Stack Developer con {experience_years} anni di esperienza, appassionato di tecnologia e di tutto ciò che ruota attorno al mondo dell'informatica.</p>
            <p class="mb-2 text-lg">🍼 A 8 anni ho iniziato a studiare BASIC sul vecchio PC scassato di papà, imparando a creare i miei primi programmi. Da allora, la mia passione per la programmazione non ha mai smesso di crescere. Questo mi ha permesso di sviluppare un pensiero analitico e di trovare soluzioni creative e innovative ai problemi di programmazione che incontro ogni giorno.</p>
            <p class="mb-2 text-lg">🐧 Sostengo la comunità Open Source e utilizzo Linux quotidianamente. Sono sempre alla ricerca di nuove sfide che mi permettano di ampliare le mie conoscenze e di essere sempre aggiornato sulle ultime tecnologie.</p>
            <p class="mb-2 text-lg">💬 Se sei alla ricerca di un Full Stack Developer appassionato, professionale e affidabile, non esitare a contattarmi!</p>
        </div>
    </div>
</section>

<!-- Portfolio info -->
<section class="bg-neutral-950 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 grid-cols-2">
        <div class="flex mb-5 flex-wrap">
            <div class="grow"><h2 class="text-5xl mb-5 font-semibold">Questo <span class="text-amber-600">portfolio</span> usa</h2></div>
            <div class="flex">
                <div><i class="devicon-svelte-plain text-7xl"></i></div>
                <div><i class="devicon-tailwindcss-plain text-7xl"></i></div>
                <div><i class="devicon-linux-plain text-7xl"></i></div>
            </div>
        </div>
        <p>
            <span class="text-amber-600 font-semibold">Swoosh!</span>🚀 Questo portfolio ha impiegato <span class="text-amber-600 font-semibold">{load_time} ms</span> per caricarsi totalmente! 
            La media mondiale di caricamento è di <span class="text-amber-600 font-semibold">2.5 s su desktop e di 8.6 s su mobile</span>. 
            <a class="text-amber-600 underline hover:text-neutral-100 transition duration-300" target="_blank" href="https://www.tooltester.com/en/blog/website-loading-time-statistics/"><sup>[1]</sup></a> 
            La performance di un sito è cruciale per il conversion rate dello stesso! 
            <a class="text-amber-600 underline hover:text-neutral-100 transition duration-300" target="_blank" href="https://www.thinkwithgoogle.com/intl/it-it/strategie/app-e-mobile/importanza-velocita-sito-mobile-test-my-site/"><sup>[2]</sup></a>
            La scelta frontend di Svelte e TailwindCSS è stata fatta, tra le varie, per garantire la massima performance possibile!
        </p>
    </div>
</section>

<!-- Projects -->
<section class="bg-neutral-800 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 md:grid-cols-3 ">
        
        <h2 class="text-5xl mb-5 font-semibold"><span class="text-amber-600">Alcuni</span> progetti</h2>
        <div class="flex flex-wrap mb-10 items-center">
            <div class="lg:order-1 lg:basis-2/3 mb-5 lg:mb-0">
                <img alt="MeteoAM Screenshot" class="rounded-lg" src="screenshot/meteoam.jpg">
            </div>
            <div class="lg:order-2 lg:basis-1/3 lg:px-5">
                <h3 class="text-5xl mb-5 font-semibold"><span class="text-amber-600">2021</span> - MeteoAM</h3>
                <p class="mb-2 text-lg">Mi sono occupato dello sviluppo delle mappe evolute per MeteoAM, il sito ufficiale del meteo dell'Aeronautica Militare italiana.</p>
                <p class="mb-2 text-lg">Ho partecipato al progetto in prima linea: mi sono occupato del backend a tutto tondo, a partire dalla configurazione del server.</p>
                <p class="mb-2 text-lg">Il lavoro ha richiesto 1 anno di sviluppo</p>
            </div>
        </div>
        <div class="flex flex-wrap mb-10 items-center">
            <div class="lg:order-2 lg:basis-2/3 mb-5 lg:mb-0">
                <img alt="Giddierre Screenshot" class="rounded-lg" src="screenshot/giddierre.jpg">
            </div>
            <div class="lg:order-1 lg:basis-1/3 lg:px-5">
                <h3 class="text-5xl mb-5 font-semibold"><span class="text-amber-600">2022</span> - Giddierre</h3>
                <p class="mb-2 text-lg">Giddierre è la community italiana sui giochi di ruolo.</p>
                <p class="mb-2 text-lg">Ho fondato personalmente Giddierre insieme ai miei soci per poter contribuire in prima persona alla diffusione in italia di questo bellissimo hobby.</p>
                <p class="mb-2 text-lg">Come sviluppatore mi sono occupato in particolare della creazione del blog.</p>
            </div>
        </div>
    </div>
</section>

<!-- Github -->
<section class="bg-neutral-950 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 grid-cols-2">
        <div class="flex">
            <div class="grow"><h2 class="text-5xl font-semibold">Questo portfolio è su <a target="_blank" class="text-amber-600 underline hover:text-neutral-100 transition duration-300" href="https://github.com/stefaniscion/my-portfolio">GitHub</a>!</h2></div>
            <div><i class="devicon-github-original text-7xl"></div>
        </div>
        <p>Sono un grande fan della community Open Source! Puoi dare un'occhiata ai sorgenti del mio portfolio e prenderli se vuoi!</p>
    </div>
</section>