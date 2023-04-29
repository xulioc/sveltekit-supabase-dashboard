import { writable, type Writable } from 'svelte/store';

export const logo: Writable<unknown> = writable(null);
