import { error, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { database } from '$lib/db/db';
import { redirect } from '@sveltejs/kit';

export const load = (async ({locals}) => {
    let currentProfilePic = locals.profilePic

    return {currentProfilePic};
}) satisfies PageServerLoad;

export const actions: Actions = {
    profilePic: async ({request, locals, cookies}) => {
        const form = await request.formData()
        const profilePic = String(form.get('picURL'))

        let session = locals.session

        if(!profilePic || typeof profilePic !== 'string'){
            return fail(400, {format: false})
        }

        if(profilePic && session){
            await database.user.update({
                where: {
                    session
                },
                data: {
                    profilePic
                }
            })
        }

        
    },

    darkmode: async ({locals, request, cookies}) => {
        const form = await request.formData()
        const checked = String(form.get('darkmode'))

        const session = locals.session

        if(checked == "dark"){
            await database.user.update({
                where: {session},
                data: {
                    darkMode: true
                }
            })
        } else {
            await database.user.update({
                where: {session},
                data: {
                    darkMode: false
                }
            })
        }
    },

    logout: async ({locals, request, cookies}) => {
        cookies.delete("session");
    throw redirect(302, "/login");
    }
}