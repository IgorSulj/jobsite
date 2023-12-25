<script lang="ts">
    import Icon from "./Icon.svelte";

    export let text: string = ''
    export let complete: boolean = false
</script>

<Icon {text} {complete}>
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_218_285" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
    <rect x="0.399902" y="0.400024" width="19.2" height="19.2" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_218_285)">
    <path d="M7.95998 14.68L3.47998 10.2L4.33998 9.34003L7.95998 12.96L15.64 5.28003L16.5 6.14003L7.95998 14.68Z" fill="white"/>
    </g>
    </svg>
</Icon>