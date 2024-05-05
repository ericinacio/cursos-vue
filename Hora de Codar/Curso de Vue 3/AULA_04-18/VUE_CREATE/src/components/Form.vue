<template>
    <div>
        <h2>Meu Formulário:</h2>
        <form action="" @submit="enviarFormulario($event)">
            <div>
                <input type="text" v-model="nome">
            </div>
            <div>
                <input type="text" v-model="email">
            </div>
            <div>
                <Submit/>
            </div>
        </form>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
    </div>
</template>
<script>
    import InputText from './form/InputText.vue';
    import Submit from './form/Submit.vue';
    export default {
        name:'Form',
        components: {
            InputText,
            Submit
        },
        data(){
            return {
                nome:"111",
                email:""
            }
        },
        methods: {
            enviarFormulario(e){
                e.preventDefault();
                const nome = this.nome;
                const email = this.email;
                console.log("Formulário Enviado!");
                console.log("O nome é "+ nome)
                console.log("O email é "+ email)

                // Ajax

                // Inserir no banco de dados
            }
        }
    }
</script>

<style scoped>
    p {
        margin: 150px;
    }
</style>