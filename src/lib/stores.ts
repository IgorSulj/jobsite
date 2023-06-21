import { onMount } from "svelte";
import { readable } from "svelte/store";

export const mediaQuery = (query: string) => readable<boolean | undefined>(undefined, set => {
    onMount(() => {
        let media = window.matchMedia(query)
        set(media.matches)
        const handleEvent = (event: MediaQueryListEvent) => set(event.matches)
        media.addEventListener('change', handleEvent)

        return () => media.removeEventListener('change', handleEvent)
    })
})
