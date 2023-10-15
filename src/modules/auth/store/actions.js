// export const myActions = async ({commit})=>
// {    // }
import authApi from "@/api/AuthApi"
export const createUser = async ({ commit }, user) => {
    const { name, email, password } = user

    try {
        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
        const { idToken, refreshToken } = data

        await authApi.post(':update', { displayname: name, idToken, refreshToken })

        delete user.password
        commit('loginUser', { user, idToken, refreshToken })
        // console.log(data)

        return { ok: true }

    } catch (error) {
        console.log(error.response)
        return { ok: false, message: error.response.data.error.message }
    }

}

export const signInUser = async ({ commit }, user) => {
    const { email, password } = user


    try {
        const { data } = await authApi.post(':signInWithPassword', { email, password, returnSecureToken: true })
        const { displayname, idToken, refreshToken } = data

        user.name = displayname

        commit('loginUser', { user, idToken, refreshToken })
        // console.log(data)

        return { ok: true }

    } catch (error) {
        // console.log(error.response)
        return { ok: false, message: error.response.data.error.message }
    }

}
export const checkAuthentication = async ({ commit }) => {
    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (!idToken) {
        commit('logout')
        return { ok: false, message: 'No hay token en la peticion' }
    }
    try {
        const { data } = await authApi.post(':lookup', { idToken })
        const { displayname, email } = data.users[0]
        const user = {
            name: displayname,
            email
        }
        commit('loginUser', { user, idToken, refreshToken })
        return { ok: true }
    }
    catch (error) {
        commit('logout')
        return { ok: false, message: error.response.data.error.message }
    }
}