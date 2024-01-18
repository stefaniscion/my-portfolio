<script lang="ts">
    export let name: string;
    export let level: Number;
    export let icon: string;
    export let basis: string;
</script>

<div class="flex grow w-full {basis} p-2">
    <div class="text-4xl mr-2">
        <i class={icon}></i>
    </div>
    <div class="grow">
            <p>{name}</p>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-amber-600 h-2.5 rounded-full" style="width: {level}%"></div>
            </div>    
    </div>
</div>