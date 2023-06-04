// See https://kit.svelte.dev/docs/types#app

import type { svelte } from "@sveltejs/vite-plugin-svelte";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	namespace svelte.JSX {
		interface HTMLAttributes {
			onoutpress: (e: CustomEvent) => void
		}
	}
}

export {};
