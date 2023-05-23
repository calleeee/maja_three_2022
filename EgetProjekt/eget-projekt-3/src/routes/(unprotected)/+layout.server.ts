import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({locals}) => {
    let session = locals.session

    if(session){
        throw redirect(307, "/home")
    }
}) satisfies LayoutServerLoad;