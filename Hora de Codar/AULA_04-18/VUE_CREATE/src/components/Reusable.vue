<template>
    <div>
      <button @click="ativar">Clique aqui!</button>
      <span v-show="activated">Ativado!</span>
    </div>
  </template>
  <script>
    export default {
      name: 'Reusable',
      data() {
        return {
            activated: false
        }
      },
      methods: {
        ativar() {
            this.activated = !this.activated
        }
      }
    }
  </script>