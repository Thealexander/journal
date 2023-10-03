<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">03</span>
      <span class="mx-1 fs-3">10</span>
      <span class="mx-2 fs-4 fw-light">2023, Martes</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary mx-2">
        Foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea name="" id="" placeholder="Agrega algo para guardar"></textarea>
  </div>
  <FabComponent icon="fa-save" />
  <img
    src="https://poemsinspanish.club/wp-content/uploads/2021/11/home_img_09-519x513.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    FabComponent: defineAsyncComponent(() =>
      import("../components/FabComponent.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
textarea {
  border: none;
  font-size: 20px;
  height: 100%;

  &:focus {
    outline: none;
  }
}
img {
  bottom: 150px;
  box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
  position: fixed;
  right: 20px;
  width: 200px;
}
</style>