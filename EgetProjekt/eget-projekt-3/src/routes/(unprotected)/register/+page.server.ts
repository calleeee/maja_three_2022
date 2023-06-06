import { fail, type Actions, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { database } from '$lib/db/db'
import bcrypt from 'bcrypt'

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    register: async ({request, locals, cookies}) => {
        const form = await request.formData()
        const email = form.get('email')?.toString()
        const password = form.get("password")?.toString()
        const username = form.get("username")?.toString()
        const passwordConfirm = form.get("passwordConfirm")?.toString()

        let profilePic = 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'

        if(
            typeof email != 'string' ||
            typeof username != 'string' ||
            typeof password != 'string' ||
            typeof passwordConfirm != 'string' ||
            !password ||
            !username ||
            !passwordConfirm ||
            !email
        ) {
            return fail(400, {invalid: true})
        }

        const user = await database.user.findUnique({
            where: {username}
        })

        let session = crypto.randomUUID()

        if(user){
            return fail(400, {user: true})
        }

        if(password != passwordConfirm){
            return fail(400, {match: false})
        }

        await database.user.create({
            data: {
                username,
                passwordHash: await bcrypt.hash(password, 10),
                email,
                profilePic,
                colortheme: 'Grey',
                darkMode: true,
                siteVisits: 1,
                session,
            }
        })

        throw redirect(302, '/login')
    }
}