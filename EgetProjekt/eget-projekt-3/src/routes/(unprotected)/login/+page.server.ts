import { fail, type Actions, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { database } from '$lib/db/db'
import bcrypt from 'bcrypt'

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    login: async ({request, locals, cookies}) => {
        const form = await request.formData()
        const password = form.get("password")
        const username = form.get("username")

        if(
            typeof username !== 'string' ||
            typeof password !== 'string' ||
            !password ||
            !username
        ) {
            return fail(400, {invalid: true})
        }

        const user = await database.user.findUnique({
            where: {username}
        })

        if(!user){
            return fail(400, {user: false})
        }

        const passwordMatch = await bcrypt.compare(password, user.passwordHash)

        if(!passwordMatch){
            return fail(400, {password: false})
        }

        cookies.set('session', user.session, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 24 * 14
        })

        let visits = user.siteVisits

        let visitsIncrease = visits + 1

        await database.user.update({
            where: {
                username
            },
            data: {
                siteVisits: visitsIncrease
            }
        })

        throw redirect(302, '/')
    }
}