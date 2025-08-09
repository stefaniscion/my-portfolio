<!-- About -->
<script lang="ts">
    import IconButton from "$lib/elements/IconButton.svelte";
    import ContactButton from "$lib/elements/ContactButton.svelte";

    let experience_years: number = new Date().getFullYear() - 2017;
</script>

<section class="bg-neutral-800 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3">
        <div class="col-span-1 text-align-center">
            <img
                class="mx-auto rounded-full mb-2"
                src="img/stefano-di-pasquale-face.png"
                alt="Stefano Di Pasquale - Full Stack Developer"
            />
            <div class="flex space-x-3 justify-center text-3xl">

                <IconButton name="GitHub" icon="devicon-github-plain" link="https://github.com/Stefaniscion" />
                <IconButton name="LinkedIn" icon="devicon-linkedin-plain" link="https://www.linkedin.com/in/stefano-di-pasquale-70a612110/" />

            </div>
        </div>
        <div class="col-span-2">
            <h2 class="text-5xl mb-5 font-semibold">
                <span class="text-amber-600">Chi</span> sono
            </h2>
            <p class="mb-5 text-lg">
                👋 Sono un Full Stack Developer con {experience_years} anni di esperienza,
                appassionato di tecnologia e di tutto ciò che ruota attorno al mondo
                dell'informatica.
            </p>
            <p class="mb-5 text-lg">
                🍼 A 8 anni ho iniziato a studiare BASIC sul vecchio PC scassato
                di papà, imparando a creare i miei primi programmi. Da allora,
                la mia passione per la programmazione non ha mai smesso di
                crescere. Questo mi ha permesso di sviluppare un pensiero
                analitico e di trovare soluzioni creative e innovative ai
                problemi di programmazione che incontro ogni giorno.
            </p>
            <p class="mb-5 text-lg">
                🐧 Sostengo la comunità Open Source e utilizzo Linux
                quotidianamente. Sono sempre alla ricerca di nuove sfide che mi
                permettano di ampliare le mie conoscenze e di essere sempre
                aggiornato sulle ultime tecnologie.
            </p>
            <p class="mb-5 text-lg">
                💬 Se sei alla ricerca di un Full Stack Developer appassionato,
                professionale e affidabile, non esitare a contattarmi!
            </p>
            <ContactButton theme="light"/>
        </div>
    </div>
</section>
