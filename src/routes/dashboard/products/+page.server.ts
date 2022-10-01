import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    console.log("FETCHING PRODUCTS...");
    const result = await fetch('https://dummyjson.com/products');
    const products = await result.json();
    console.log(products)

    if (products) {
        return products;
    }

    throw error(404, 'Not found');
}