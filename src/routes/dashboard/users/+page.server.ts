import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    console.log("FETCHING USERS...");
    const result = await fetch('https://dummyjson.com/users');
    const users = await result.json();
    console.log(users)

    if (users) {
        return users;
    }

    throw error(404, 'Not found');
}