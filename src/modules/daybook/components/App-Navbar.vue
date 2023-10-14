/* eslint-disable */
<template>
    <nav class="navbar bg-primary">
        <a class="nav-bar-brand text-white">
            <img src="@/assets/logo.png" alt="Vue logo"
            height="24"
            class="d-inline-block align-text-top mx-2">
            {{userName}}
        </a>
        <div class="d-flex">
            <button @click="onLogout" 
            class="btn btn-outline-info mx-2">
                <i class="fa fa-sign-out"></i>
            </button>
        </div>
    </nav>
</template>
<script>
import useAuth from "@/modules/auth/composables/useAuth"
import { useRouter } from 'vue-router'
export default {

    setup(){
        const router = useRouter ()
        const {userName, logout} = useAuth()

        return {
            userName,
            onLogout: () =>
            {
                router.push({name: 'login'})
                logout()
            }
        }
    }


}
</script>