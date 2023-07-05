<script>
    import router from '../router/index' 
    export default{
        name: 'RightFirstPage',
        data(){
            return{
                nome: null,
                email: null,
                password: null
            }
        },
        methods: {
            async setUser(e){
                e.preventDefault()
                let dados = {
                    "nome": this.nome,
                    "email": this.email,
                    "password": this.password
                }
                dados = JSON.stringify(dados);
                const req = await fetch('http://localhost:3000', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: dados
                });
                let dados_req = await req.json();
                if(dados_req.error){
                    document.getElementById('div-error').removeAttribute('hidden');
                }else{
                    localStorage.setItem('token', dados_req.token);
                    localStorage.setItem('id', dados_req.result[0].insertId);
                    this.$router.push('/user');
                }
                
            }
        },
    }
</script>

<template>
    <div class="h-screen">
        <div class="flex justify-center items-end h-2/6 mb-14">
            <h4 class="font-semibold text-5xl">Crie sua conta agora !</h4>
        </div>
        <div>
            <div hidden id="div-error">
                <p class="text-center text-red-500">Erro ao tentar cadastrar usuário !</p>
            </div>
            <form @submit="setUser($event)">
                <div class="flex justify-center pb-5">
                    <input type="text" class="border-2 rounded-lg w-5/6 h-14 outline-none pl-2 focus:shadow-lg duration-700" placeholder="Seu Nome" required v-model="nome">
                </div>
                <div class="flex justify-center pb-5">
                    <input type="email" class="border-2 rounded-lg w-5/6 h-14 outline-none pl-2 focus:shadow-lg duration-700" placeholder="Seu E-mail" required v-model="email">
                </div>
                <div class="flex justify-center">
                    <input type="password" class="border-2 rounded-lg w-5/6 h-14 outline-none pl-2 focus:shadow-lg duration-700" placeholder="Sua Senha" required v-model="password">
                </div>
                <div class="flex justify-center mt-5">
                    <button class="bg-green-500 w-56 rounded-lg text-white h-14 hover:shadow-lg duration-700" type="submit">Registrar-se</button>
                </div>
            </form>
        </div>
    </div>
</template>