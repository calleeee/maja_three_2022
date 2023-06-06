import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({locals}) => {
    let username = locals.username
    let siteVisits = locals.siteVisits
    let profilePic = locals.profilePic

    return {username, siteVisits, profilePic}
}