<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center"> No se ha seleccionado Ninguna entrada</h1>
  </div>
  <FabComponent/>
</template>

<script>
 import { defineAsyncComponent } from 'vue';
export default {
components:{
    FabComponent: defineAsyncComponent(()=> import('../components/FabComponent.vue'))
}
}
</script>

<style lang="scss" scoped>
div{
    height: 100%;
}
</style>