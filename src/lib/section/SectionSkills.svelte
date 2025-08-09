<!-- Skills -->
<script lang="ts">
    import CardSkill from '$lib/elements/CardSkill.svelte';
</script>
<section class="bg-neutral-950 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-5xl mb-5 font-semibold">Le mie <span class="text-amber-600">main skills</span></h2>
        <div class="flex flex-row flex-wrap mb-5">
            <CardSkill name="Python" level={100} icon="devicon-python-plain" basis="basis-full lg:basis-1/3"/>
            <CardSkill name="Linux" level={90} icon="devicon-linux-plain" basis="basis-full lg:basis-1/3"/>
            <CardSkill name="PHP" level={90} icon="devicon-php-plain" basis="basis-full lg:basis-1/3"/>
            <CardSkill name="Docker" level={80} icon="devicon-docker-plain" basis="basis-full lg:basis-1/5"/>
            <CardSkill name="Javascript" level={80} icon="devicon-javascript-plain" basis="basis-full lg:basis-1/5"/>
            <CardSkill name="TypeScript" level={70} icon="devicon-typescript-plain" basis="basis-full lg:basis-1/5"/>
            <CardSkill name="C++" level={40} icon="devicon-cplusplus-plain" basis="basis-full lg:basis-1/5"/>
            <CardSkill name="Rust" level={40} icon="devicon-rust-plain" basis="basis-full lg:basis-1/5"/>
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