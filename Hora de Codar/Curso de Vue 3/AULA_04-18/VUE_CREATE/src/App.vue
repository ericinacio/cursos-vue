<template>
  <Header :esta_logado="true"/>
  <FirstComponent/>
  <p class="paragrafo-pai">O dado de app é {{testando}}</p>
  <LifeCycle/>
  <Person/>
  <Form/>
</template>

<script>
  import Header from './components/Header.vue';
  import FirstComponent from './components/FirstComponent.vue';
  import LifeCycle from './components/LifeCycle.vue';
  import Person from './components/Person.vue';
  import Form from './components/Form.vue';
    export default {
        name: 'App',
        components: {
            Header,
            FirstComponent,
            LifeCycle,
            Person,
            Form
        },
        data() {
          return {
            testando: "Teste"
          }
        }
    }
</script>


<style>
  body{
    background-color: #333;
    color: #f0f0f0;
  }
  a {
    color: red;
  }
  .teste {
    background: black;
  }
</style>