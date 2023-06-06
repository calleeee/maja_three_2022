// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: string
			username?: string
			siteVisits?: number | any
			profilePic?: string
			darkMode?: boolean
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
