<template>
    <CardComp/>
  </template>
  
  <script>
  // @ is an alias to /src
  import CardComp from '@/components/CardComp.vue'
  
  export default {
    name: 'ProductView',
    components: {
      CardComp
    }
  }
  </script>