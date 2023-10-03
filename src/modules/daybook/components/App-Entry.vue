<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({name:'entry-view', params:{id:10}})">
    <!--TITULO-->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">03</span>
      <span class="mx-1 fs-5 fw-bold">Octubre</span>
      <span class="mx-2 fs-5 fw-light">2023, Martes</span>
    </div>
    <div class="entry-description">
      Ea nisi nisi fugiat laborum laborum culpa labore est quis quis Lorem incididunt.
    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
&:hover{
  background-color: lighten($color: grey, $amount: 45);
  transition: 0.2s all ease-in;
}
.entry-description{ font-size: 12px}

}
</style>