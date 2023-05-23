import type { Handle } from "@sveltejs/kit";
import { database } from '$lib/db/db'

export const handle: Handle = async ({event, resolve}) =>{
    let session = event.cookies.get("session");



    if(session){
        event.locals.session = session

        let user = await database.user.findFirst({
            where: { id: session }
        })

        event.locals.username = user?.username

        event.locals.siteVisits = user?.siteVisits

        event.locals.profilePic = user?.profilePic
    }

    return resolve(event)
}