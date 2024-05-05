<template>
    <div>
        <h2>Está é a descrição da pessoa {{name}}</h2>
        <Picture/>
        <Info :email="email" :esta_trabalhando=true />
    </div>
</template>
<script>
    import Info from './Info.vue'
    import Picture from './Picture.vue';
    export default {
        name:'Person',
        components: {
            Info,
            Picture
        },
        data() {
            return {
                name: 'Eric',
                email: 'eric2@email.com'
            }
        }
    }
</script>