<script lang="ts">
    // auto
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
<section class="bg-neutral-800 text-neutral-100 pt-20 font-mona-sans">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3">
        <div class="col-span-2">
            <h1 class="text-amber-600 text-7xl font-semibold">Stefano Di Pasquale</h1>
            <h2 class="text-5xl mb-5 font-semibold">Full Stack Developer 💻</h2>
            <p class="text-lg mb-5">
                Sono un <span class="bg-neutral-700 px-1 py-0.5 rounded-lg text-amber-600">Full Stack Developer</span> con <span class="bg-neutral-700 px-1 py-0.5 rounded-lg text-amber-600">{experience_years} anni di esperienza</span>.<br>
                Ho una forte <span class="bg-neutral-700 px-1 py-0.5 rounded-lg text-amber-600">passione per l'informatica</span> e la uso nel mio lavoro di sviluppo.<br>
                Sono qui per creare <span class="bg-neutral-700 px-1 py-0.5 rounded-lg text-amber-600">soluzioni innovative</span> e portare in vita le tue idee digitali!
            </p>
            <a target="_blank" href="https://calendly.com/stefaniscion/chiamata-introduttiva"><button class="bg-amber-600 text-neutral-100 px-5 py-3 rounded-lg hover:bg-neutral-950 hover:text-neutral-100 transition duration-300 text-xl" type="submit">Contattami ora!</button></a>
        </div>
        <div class="col-span-1">
            <div class="flex justify-center mt-5">
                <img src="img/stefano-di-pasquale-full.png" alt="Stefano Di Pasquale - Full Stack Developer">
            </div>
        </div>
    </div>
</section>

<!-- Counters -->
<section class="bg-neutral-950 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between text-center">
            <div class="basis-full lg:basis-1/4">
                <p class="text-7xl font-semibold text-amber-600">{experience_years}+</p>
                <p class="text-lg">Anni di esperienza 📆</p>
            </div>
            <div class="basis-full lg:basis-1/4">
                <p class="text-7xl font-semibold text-amber-600">50+</p>
                <p class="text-lg">Consulenze effettuate 📈</p>
            </div>
            <div class="basis-full lg:basis-1/4">
                <p class="text-7xl font-semibold text-amber-600">{production_hours}K</p>
                <p class="text-lg">Ore di sviluppo svolte per i miei clienti 🕞</p>
            </div>
            <div class="basis-full lg:basis-1/4">
                <p class="text-7xl font-semibold text-amber-600">{production_coffes}</p>
                <p class="text-lg">Caffè consumati in produzione ☕</p>
            </div>
        </div>
    </div>
</section>

<!-- Occupation -->
<section class="bg-neutral-800 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-5xl mb-5 font-semibold">Mi <span class="text-amber-600">occupo</span> di</h2>
        <div class="flex flex-wrap justify-between text-center mb-5">
            <div class="basis-full mb-5 lg:basis-1/3 lg:px-5">
                <h3 class="text-3xl mb-5 font-semibold"><span class="text-amber-600">Software</span> Enginering 🖥️</h3>
                <p>La programmazione è l'arte di creare il futuro! Se hai bisogno di sviluppare software di alta qualità su misura per le tue esigenze, sono qui per te. Con anni di esperienza nel campo, posso trasformare le tue idee in codice impeccabile.</p>
            </div>
            <div class="basis-full mb-5 lg:basis-1/3 lg:px-5">
                <h3 class="text-3xl mb-5 font-semibold"><span class="text-amber-600">Web</span> Development 🌐</h3>
                <p>Vuoi un sito web che catturi l'attenzione e offra un'esperienza utente straordinaria? Sono esperto nello sviluppo web e posso trasformare la tua visione in una realtà digitale. Dal design all'implementazione!</p>
            </div>
            <div class="basis-full mb-5 lg:basis-1/3 lg:px-5">
                <h3 class="text-3xl mb-5 font-semibold"><span class="text-amber-600">Linux Sys</span> Administration 🐧</h3>
                <p>Se hai bisogno di un esperto in amministrazione di sistemi Linux per gestire i tuoi server e assicurarti che tutto funzioni in modo efficiente e sicuro, potrei fare al caso tuo. Posso occuparmi di installazioni, configurazioni, patching e monitoraggio dei tuoi sistemi Linux.</p>
            </div>
        </div>
    </div>
</section>

<!-- Skills -->
<section class="bg-neutral-950 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-5xl mb-5 font-semibold">Le mie <span class="text-amber-600">main skills</span></h2>
        <div class="flex flex-row flex-wrap mb-5">
            <Skill name="Python" level="100" icon="devicon-python-plain" basis="basis-full lg:basis-1/3"/>
            <Skill name="Linux" level="90" icon="devicon-linux-plain" basis="basis-full lg:basis-1/3"/>
            <Skill name="PHP" level="90" icon="devicon-php-plain" basis="basis-full lg:basis-1/3"/>
            <Skill name="Docker" level="80" icon="devicon-docker-plain" basis="basis-full lg:basis-1/5"/>
            <Skill name="Javascript" level="80" icon="devicon-javascript-plain" basis="basis-full lg:basis-1/5"/>
            <Skill name="TypeScript" level="70" icon="devicon-typescript-plain" basis="basis-full lg:basis-1/5"/>
            <Skill name="C++" level="40" icon="devicon-cplusplus-plain" basis="basis-full lg:basis-1/5"/>
            <Skill name="Rust" level="40" icon="devicon-rust-plain" basis="basis-full lg:basis-1/5"/>
        </div>
        <p>
            (Ma mi intendo anche di: 
            <span class="text-amber-600">HTML</span>, 
            <span class="text-amber-600">CSS</span>, 
            <span class="text-amber-600">Git</span>, 
            <span class="text-amber-600">Shell</span>, 
            <span class="text-amber-600">Nginx</span>, 
            <span class="text-amber-600">Apache</span>, 
            <span class="text-amber-600">React.js</span>, 
            <span class="text-amber-600">Flask</span>, 
            <span class="text-amber-600">PostgreSQL</span>, 
            <span class="text-amber-600">MySQL</span>, 
            <span class="text-amber-600">C#</span>, 
            <span class="text-amber-600">FastAPI</span>, 
            <span class="text-amber-600">Svelte</span>,
            <span class="text-amber-600">Tailwind</span>, ...)
        </p>
    </div>
</section>

<!-- Contact banner -->
<section class="bg-amber-600 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
            <h2 class="text-5xl mb-5 text-center font-semibold">Hai bisogno di una consulenza? <span class="text-neutral-950">Contattami!</span></h2>
            <a target="_blank" href="https://calendly.com/stefaniscion/chiamata-introduttiva"><button class="bg-neutral-950 text-neutral-100 px-5 py-3 rounded-lg hover:bg-neutral-100 hover:text-neutral-950 transition duration-300 text-xl" type="submit">Contattami ora!</button></a>
        </div>
    </div>
</section>

<!-- Partners -->
<section class="bg-neutral-950 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4">
        <h2 class="text-5xl mb-5 text-center font-semibold"><span class="text-amber-600">Ho lavorato</span> con</h2>
        <div class="flex flex-wrap justify-between">
            <img class="w-full basis-1/2 sm:basis-1/5" alt="Aeronautica Militare" src="img/logo/aeronautica_militare.png">
            <img class="w-full basis-1/2 sm:basis-1/5" alt="Anas" src="img/logo/anas.png">
            <img class="w-full basis-1/2 sm:basis-1/5" alt="Altran" src="img/logo/altran.png">
            <img class="w-full basis-1/2 sm:basis-1/5" alt="Dedagroup" src="img/logo/dedagroup.png">
            <img class="w-full basis-1/2 sm:basis-1/5" alt="Giddierre" src="img/logo/giddierre.png">
        </div>
    </div>
</section>

<!-- About -->
<section class="bg-neutral-800 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3">
        <div class="col-span-1 text-align-center">
            <img class="mx-auto" src="" alt="Stefano Di Pasquale - Full Stack Developer">
            <div class="flex space-x-3 justify-center text-3xl">
                <a class="text-amber-600 hover:text-neutral-100 transition duration-300" target="_blank" href="https://www.linkedin.com/in/stefano-di-pasquale-70a612110/"><i class="devicon-linkedin-plain"></i></a>
                <a class="text-amber-600 hover:text-neutral-100 transition duration-300" target="_blank" href="https://github.com/Stefaniscion"><i class="devicon-github-plain"></i></a>
            </div>
        </div>
        <div class="col-span-2">
            <h2 class="text-5xl mb-5 font-semibold"><span class="text-amber-600">Chi</span> sono</h2>
            <p class="mb-5 text-lg">👋 Sono un Full Stack Developer con {experience_years} anni di esperienza, appassionato di tecnologia e di tutto ciò che ruota attorno al mondo dell'informatica.</p>
            <p class="mb-5 text-lg">🍼 A 8 anni ho iniziato a studiare BASIC sul vecchio PC scassato di papà, imparando a creare i miei primi programmi. Da allora, la mia passione per la programmazione non ha mai smesso di crescere. Questo mi ha permesso di sviluppare un pensiero analitico e di trovare soluzioni creative e innovative ai problemi di programmazione che incontro ogni giorno.</p>
            <p class="mb-5 text-lg">🐧 Sostengo la comunità Open Source e utilizzo Linux quotidianamente. Sono sempre alla ricerca di nuove sfide che mi permettano di ampliare le mie conoscenze e di essere sempre aggiornato sulle ultime tecnologie.</p>
            <p class="mb-5 text-lg">💬 Se sei alla ricerca di un Full Stack Developer appassionato, professionale e affidabile, non esitare a contattarmi!</p>
            <a target="_blank" href="https://calendly.com/stefaniscion/chiamata-introduttiva"><button class="bg-amber-600 text-neutral-100 px-5 py-3 rounded-lg hover:bg-neutral-950 hover:text-neutral-100 transition duration-300 text-xl" type="submit">Contattami ora!</button></a>
        </div>
    
    </div>
</section>

<!-- Portfolio info -->
<section class="bg-neutral-950 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 grid-cols-2">
        <div class="flex mb-5 flex-wrap">
            <div class="grow"><h2 class="text-5xl mb-5 font-semibold">Questo <span class="text-amber-600">portfolio</span> è scritto con</h2></div>
            <div class="flex">
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

<!-- Projects -->
<section class="bg-neutral-800 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 md:grid-cols-3 ">
        
        <h2 class="text-5xl mb-5 font-semibold">Alcuni <span class="text-amber-600">miei progetti</span></h2>
        <div class="flex flex-wrap mb-10 items-center">
            <div class="lg:order-1 lg:basis-2/3 mb-5 lg:mb-0">
                <img alt="MeteoAM Screenshot" class="rounded-lg" src="img/screenshot/meteoam.jpg">
            </div>
            <div class="lg:order-2 lg:basis-1/3 lg:px-5">
                <h3 class="text-5xl mb-5 font-semibold"><span class="text-amber-600">2021</span> - MeteoAM</h3>
                <p class="mb-5 text-lg">Mi sono occupato dello sviluppo delle mappe evolute per MeteoAM, il sito ufficiale del meteo dell'Aeronautica Militare italiana.</p>
                <p class="mb-5 text-lg">Ho partecipato al progetto in prima linea: mi sono occupato del backend a tutto tondo, a partire dalla configurazione del server.</p>
                <p class="mb-5 text-lg">Il lavoro ha richiesto circa 1 anno di sviluppo.</p>
                <div class="flex space-x-3 items-baseline text-2xl">
                    <h4 class="mb-5 font-semibold">Scritto con</h4>
                    <i class="devicon-python-plain"></i>
                    <i class="devicon-javascript-plain"></i>
                    <i class="devicon-css3-plain"></i>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap mb-10 items-center">
            <div class="lg:order-2 lg:basis-2/3 mb-5 lg:mb-0">
                <img alt="Giddierre Screenshot" class="rounded-lg" src="img/screenshot/giddierre.jpg">
            </div>
            <div class="lg:order-1 lg:basis-1/3 lg:px-5">
                <h3 class="text-5xl mb-5 font-semibold"><span class="text-amber-600">2022</span> - Giddierre</h3>
                <p class="mb-5 text-lg">Giddierre è la community italiana sui giochi di ruolo.</p>
                <p class="mb-5 text-lg">Ho fondato personalmente Giddierre insieme ai miei soci per poter contribuire in prima persona alla diffusione in italia di questo bellissimo hobby.</p>
                <p class="mb-5 text-lg">Come sviluppatore mi sono occupato in particolare della creazione del blog.</p>
                <div class="flex space-x-3 items-baseline text-2xl">
                    <h4 class="mb-5 font-semibold">Scritto con</h4>
                    <i class="devicon-wordpress-plain"></i>
                    <i class="devicon-javascript-plain"></i>
                    <i class="devicon-css3-plain"></i>
                </div>
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
        <p>Sono un grande fan della community Open Source! Puoi dare un'occhiata ai sorgenti del mio portfolio o di altri miei progetti se vuoi!</p>
    </div>
</section>

<!-- Form -->
<!-- <section class="bg-amber-600 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 grid-cols-2">
        <h2 class="text-5xl mb-5 font-semibold"><span class="text-neutral-950">Hey!</span> Contattami</h2>
        <form action="https://formspree.io/f/mpzgobky" method="POST" class="text-neutral-950">
            <label class="block mb-5"><input type="email" name="email" placeholder="Email" class="rounded-lg h-10 w-full p-2 text-xl"></label>
            <label class="block mb-5"><textarea name="message" placeholder="Messaggio" class="rounded-lg h-72 w-full p-2 text-xl"></textarea></label>
            <a target="_blank" href="https://calendly.com/stefaniscion/chiamata-introduttiva"><button class="bg-neutral-950 text-neutral-100 px-5 py-3 rounded-lg hover:bg-neutral-100 hover:text-neutral-950 transition duration-300" type="submit">Invia</button></a>
        </form>
    </div>
</section> -->