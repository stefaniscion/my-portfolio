<!-- Counters -->
<script lang="ts">
    let experience_years: number = new Date().getFullYear() - 2017;
    let production_hours: number = Math.ceil(((new Date() - new Date('1/1/2017'))/ (1000 * 60 * 60 * 24)) * 5.7 / 1000);
    let production_coffes: number = Math.ceil(((new Date() - new Date('1/1/2017'))/ (1000 * 60 * 60 * 24)) * 1.5);
</script>
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