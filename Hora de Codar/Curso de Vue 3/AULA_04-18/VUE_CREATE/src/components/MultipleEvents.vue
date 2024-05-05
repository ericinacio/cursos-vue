<template>
  <div>
    <button @click="first(txt1,$event),second(txt2,$event),third()">Ativar múltiplos eventos</button>
    <p>{{ multiple_events }}</p>
  </div>
</template>
  
<script>
  export default {
    name: 'MultipleEvents',
    data(){
      return {
        multiple_events: "",
        txt1:'Primeiro Evento',
        txt2:'Segundo Evento'
      }
    },
    methods: {
      first(txt,e){
        this.multiple_events = txt
      },
      second(txt,e) {
        setTimeout(() => {
          this.multiple_events = txt
        }, 500);
      },
      third() {
        setTimeout(() => {
          this.multiple_events = ''
        }, 1000);
      }
    }
  }
</script>

<style scoped>
  div {
    margin: 100px;
  }
</style>