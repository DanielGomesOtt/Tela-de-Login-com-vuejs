<script>
import LeftFirstPage from '../components/LeftFirstPage.vue';
import RightFirstPage from '../components/RightFirstPage.vue';
    export default{
        name:'FirstPage',
        components: {
            LeftFirstPage,
            RightFirstPage
        },
        data(){
            return{
                isOpen: false,
                email:  '',
                password: '',
            }
        },
        methods: {
            showModal(){
                this.isOpen = true
            },
            closeModal(event){
                if(event.target.id == 'modal-backdrop'){
                    this.isOpen = false;
                }else{
                    return
                }
            },
            async loginUser(event){
                event.preventDefault();
                
                const req = await fetch('http://localhost:3000/login', {
                    headers: {
                        'Content-Type': 'application/json',
                        "email": this.email,
                        "password": this.password
                    }
                });
                let dados_req = await req.json();
                if(dados_req.error){
                    document.getElementById('login-error').removeAttribute('hidden');
                }else{
                    localStorage.setItem("token", dados_req.token);
                    localStorage.setItem("id", dados_req.id);
                    this.$router.push('/user');
                } 
            }
        }   
    }
</script>

<template>
    <div class="grid lg:grid-cols-2 h-screen">
        <div>
            <LeftFirstPage @showModal="showModal"/>
        </div>
        <div>
            <RightFirstPage />
        </div>
        <div
            v-show="isOpen"
            class="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-gray-700 bg-opacity-50
            "
            id="modal-backdrop"
            @click="closeModal($event)"
        >
            <div class="max-w-2xl w-full p-6 bg-white rounded-lg shadow-xl">
            <div class="flex items-center justify-center mb-2">
                <h3 class="text-3xl font-semibold text-green-500">Acesse sua Conta !</h3>
            </div>
            <hr>
            <div class="mt-4">
                <form @submit="loginUser($event)">
                    
                    <p class="text-red-500 text-center" hidden  id="login-error">Erro ao tentar realizar login</p>
                
                    <div class="mb-5 w-full flex justify-center">
                        <input type="email" class="w-5/6 border-2 h-14 rounded-lg outline-none px-2 focus:shadow-lg duration-700" placeholder="Seu e-mail" v-model="email" required>
                    </div>
                    <div class="w-full flex justify-center">
                        <input type="password" class="w-5/6 border-2 h-14 rounded-lg outline-none px-2 focus:shadow-lg duration-700" placeholder="Sua senha" v-model="password" required>
                    </div>
                    <div class="w-full flex justify-center mt-5">
                        <button type="submit" class="bg-green-500 text-white w-4/6 rounded-lg h-14 hover:shadow-lg duration-700">Entrar</button>
                    </div>
                    <div class="w-full flex justify-center mt-2">
                        <button class="text-blue-500 underline">Esqueceu sua senha?</button>
                    </div>
                </form>
            </div>
            </div>
      </div>
    </div>
</template>