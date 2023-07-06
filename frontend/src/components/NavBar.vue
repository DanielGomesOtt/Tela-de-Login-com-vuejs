<script>
    export default {
        name:'NavBar',
        methods: {
            logOut(){
                localStorage.clear();
                this.$router.push('/')
            }
        }
    }
</script>

<template>
    <div class="bg-green-500 h-20 shadow-lg">
        <ul class="flex justify-between items-center pt-6">
            <div class="pl-5">
                <li>
                    <a href="/user" class="text-white font-semibold text-2xl">Task Life</a>
                </li>
            </div>
            <div class="flex">
                <li><a href="#" class="text-slate-200 hover:text-white font-semibold">Tarefas</a></li>
                <li><a href="#" class="ml-20 mr-20 text-slate-200 hover:text-white font-semibold">Categorias</a></li>
                <li><a href="#" class="text-slate-200 hover:text-white font-semibold">Perfil</a></li>
            </div>
            <div>
                <li><button class="border-2 text-center mr-5 w-20 h-10 rounded-lg border-white text-slate-200 hover:text-white hover:shadow hover:shadow-white" @click="logOut">Log out</button></li>
            </div>
        </ul>
    </div>
</template>