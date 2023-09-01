import { writable } from 'svelte/store';

export const subscribe = writable(false);
export let langStore = writable()