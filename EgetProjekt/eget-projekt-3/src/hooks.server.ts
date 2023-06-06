import type { Handle } from "@sveltejs/kit";
import { database } from '$lib/db/db'

export const handle: Handle = async ({event, resolve}) =>{
    let session = event.cookies.get("session");

    if(session){
        let result = await database.user.findUnique({ where: { session } });

        if (result?.session) {
          event.locals.session = session;
        }

        event.locals.username = result?.username

        event.locals.siteVisits = result?.siteVisits

        event.locals.profilePic = result?.profilePic

        event.locals.darkMode = result?.darkMode
    }

    return resolve(event)
}