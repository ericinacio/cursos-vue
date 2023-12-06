<template>
    <h1>Meu nome é {{name}}</h1>
</template>

<script>
    export default {
      name: 'LyfeCycle',
      data() {
          return {
              name: 'Ainda na sei'
          }
      },
      created() {
        setInterval(()=> {
          this.name = 'Eric'
        },1000)

        this.lifeCycle()
      },
      mounted() {
        setInterval(()=> {
          this.name = 'Ricardo'
        },2000)
      },
      methods: {
        lifeCycle() {
          console.log("Executou")
        }
      }
    }
</script>