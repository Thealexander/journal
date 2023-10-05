<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center"> No se ha seleccionado Ninguna entrada</h1>
  </div>
  <FabComponent @on:click="createNewEntry"/>
</template>

<script>
 import { defineAsyncComponent } from 'vue';
export default {
components:{
    FabComponent: defineAsyncComponent(()=> import('../components/FabComponent.vue'))
},
methods:{
  createNewEntry(){
    this.$router.push({name:'entry-view', params:{id: 'new'}})
  }
}
}
</script>

<style lang="scss" scoped>
div{
    height: 100%;
}
</style>