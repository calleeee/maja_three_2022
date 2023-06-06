import { fail, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { database } from '$lib/db/db'

export const load = (async ({locals}) => {
    if (locals.session) {
        const user = await database.user.findUnique({
          where: { session: locals.session },
        });
        if (!user?.username) {

            
          return fail(404,{message: "user not found for current session"});
        }
    
        return {
          name: user.username,
          darkMode: user.darkMode,
        };
      } else {
        console.log('shut the fuck up you schtewwwpid twat, innit')

        throw redirect(302, "/login");
      }
}) satisfies LayoutServerLoad;