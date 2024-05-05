<template>
  <div>
    <Reusable/>
    <h1>Olá Vue!</h1>
    <Reusable/>
    <p>Meu nome é {{name}} é trabalho como {{work}}</p>
    <MultipleEvents/>
    <Reusable/>
    <Reusable/>
    <Reusable/>
    <Reusable/>
    <Reusable/>
  </div>
</template>

<script>
  import MultipleEvents from './MultipleEvents.vue';
  import Reusable from './Reusable.vue';
  export default {
    name: 'FirstComponent',
    components: {
      MultipleEvents,
      Reusable
    },
    data() {
      return {
        name: "Eric",
        work: "Programador"
      }
    }
  }
</script>