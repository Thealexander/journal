<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-3">{{ month }}</span>
      <span class="mx-2 fs-4 fw-light">{{yearD}}</span>
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
    <textarea
      v-model="entry.text"
      placeholder="Agrega algo para guardar"
    ></textarea>
  </div>
  <img
    src="https://poemsinspanish.club/wp-content/uploads/2021/11/home_img_09-519x513.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  />
  </template>

<FabComponent icon="fa-save" />

</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';
import gDMY from '../helpers/gDMY';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    FabComponent: defineAsyncComponent(() =>
      import('../components/FabComponent.vue')
    ),
  },
  data() {
    return {
      entry: null,
    };
  },
  computed: {
    ...mapGetters('journal', ['getEntryById']),
    day() {
      const { day } = gDMY(this.entry?.date);
      return day;
    },
    month() {
      const { month } = gDMY(this.entry?.date);
      return month;
    },
    yearD() {
      const { yearD } = gDMY(this.entry?.date);
      return yearD;
    },
  },
  methods: {
    async loadEntry() {
      const entry = this.getEntryById(this.id);
      if (!entry) return this.$router.push({ name: 'no-entry' });
      this.entry = entry;
    },
  },
  async created() {
    await this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    },
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
