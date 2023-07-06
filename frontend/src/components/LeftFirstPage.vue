<script>
    export default{
        name: 'LeftFirstPage',
        emits: ['showModal']
    }
</script>

<template>
    <div class="bg-green-500 h-screen">
        <div class="flex justify-center items-center h-2/6">
            <h1 class="text-white font-semibold text-7xl pt-48 pb-10">Task Life</h1>
        </div>
        <div class="flex justify-center items-center h-1/6 sm:justify">
            <p class="text-white font-semibold text-xl px-10">Bem vindo(a) ao Task Life, acesse sua conta e aproveite !</p>
        </div>
        <div class="flex justify-center items-center h-3/6">
            <button class="text-white border-2 w-56 h-14 rounded-lg hover:shadow hover:shadow-white duration-700" @click="$emit('showModal')">Login</button>
        </div>
        
    </div>
</template>