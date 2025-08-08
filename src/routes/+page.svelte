<script lang="ts">
    import { onMount } from 'svelte';
    import SectionHeader from '$lib/section/SectionHeader.svelte';
    import SectionCounters from '$lib/section/SectionCounters.svelte';
    import SectionOccupation from '$lib/section/SectionOccupation.svelte';
    import SectionSkills from '$lib/section/SectionSkills.svelte';
    import SectionContactBanner from '$lib/section/SectionContactBanner.svelte';
    import SectionPartners from '$lib/section/SectionPartners.svelte';
    import SectionAbout from '$lib/section/SectionAbout.svelte';
    import SectionPortfolioInfo from '$lib/section/SectionPortfolioInfo.svelte';
    import SectionProjects from '$lib/section/SectionProjects.svelte';
    import SectionGithub from '$lib/section/SectionGithub.svelte';
    import SectionKonami from '$lib/section/SectionKonami.svelte';
    import ScriptEgg from '$lib/script/ScriptEgg.svelte';
</script>

<SectionHeader/>
<SectionCounters/>
<SectionOccupation/>
<SectionSkills/>
<SectionContactBanner/>
<SectionPartners/>
<SectionAbout/>
<SectionPortfolioInfo/>
<SectionProjects/>
<SectionGithub/>
<SectionKonami/>
<ScriptEgg/>