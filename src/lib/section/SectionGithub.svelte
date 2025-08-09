<script>
    import GitHubButton from "$lib/elements/GitHubButton.svelte";

</script>
<!-- Github -->
<section class="bg-neutral-950 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 grid-cols-2">

        <div class="flex mb-5 flex-wrap">
            <div>
                <h2 class="text-5xl font-semibold mb-5">
                    Questo portfolio è su <a
                        target="_blank"
                        class="text-amber-600 underline hover:text-neutral-100 transition duration-300"
                        href="https://github.com/stefaniscion/my-portfolio"
                        ><i class="devicon-github-plain"></i> GitHub</a
                    >!
                </h2>

                <p class="mb-5">
                    Sono un grande fan della community Open Source! Puoi dare
                    un'occhiata ai sorgenti del mio portfolio o di altri miei progetti
                    se vuoi!
                </p>

                <GitHubButton theme="light" />
            </div>
            <div>
                <a class="grayscale-0 hover:grayscale-60 transition duration-300" href="https://github.com/Stefaniscion" target="_blank" aria-label="Stefano Di Pasquale GitHub Stats">
                    <img src="https://github-readme-stats.vercel.app/api?username=stefaniscion&title_color=e17100&icon_color=e17100&text_color=ffffff&bg_color=0a0a0a&hide_border=true&locale=it&show_icons=true" alt="Stefano Di Pasquale GitHub Stats"/>
                </a>
            </div>

        

        
    </div>
</section>
