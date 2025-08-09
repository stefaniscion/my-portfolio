<!-- Counters -->
<script lang="ts">
    import Counter from "$lib/elements/Counter.svelte";
    let experience_years: number = new Date().getFullYear() - 2017;
    let difference_in_days: number = (new Date().getTime() - new Date('1/1/2017').getTime()) / (1000 * 60 * 60 * 24);
    let production_hours: string = String(Math.ceil(difference_in_days * 5.7 / 1000));
    let production_coffes: string = String(Math.ceil(difference_in_days * 1.5));
</script>
<section class="bg-neutral-950 text-neutral-100 py-20 font-mona-sans">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between text-center">
            <Counter value="{experience_years}+" text="Anni di esperienza 📆" />
            <Counter value="100+" text="Consulenze effettuate 📈" />
            <Counter value="{production_hours}K" text="Ore di sviluppo svolte per i miei partner 🕞" />
            <Counter value="{production_coffes}" text="Caffè consumati in produzione ☕" />
        </div>
    </div>
</section>