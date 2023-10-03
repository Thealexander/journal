<template>
  
  <div class="home">

    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hola Corazon</h1>
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
  </div>
</template>

<script>

export default {
  name: "HomeView",
  components: {
    
  },
  methods:{
    goToDaybook(){
      this.$router.push({name:'no-entry'})
    }
  }
};
</script>
