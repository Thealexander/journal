<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearD }}</span>
      </div>
      <div>
        <input
          type="file"
          @change="onSelectedImage"
          ref="imageSelector"
          v-show="false"
          accept="image/png, image/jpeg"
        />
        <button
          v-if="entry.id"
          class="btn btn-danger mx-2"
          @click="onDeleteEntry"
        >
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary mx-2" @click="onSelectImage">
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
    <!--
      <img
        src="https://poemsinspanish.club/wp-content/uploads/2021/11/home_img_09-519x513.jpg"
        alt="entry-picture"
        class="img-thumbnail"
      />
    -->
    <img
      v-if="localImage"
      :src="localImage"
      alt="entry-picture"
      class="img-thumbnail"
    />
  </template>

  <FabComponent icon="fa-save" @on:click="saveEntry" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";
import gDMY from "../helpers/gDMY";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    FabComponent: defineAsyncComponent(() =>
      import("../components/FabComponent.vue")
    ),
  },
  data() {
    return {
      entry: null,
      localImage: null,
      file: null,
    };
  },
  computed: {
    ...mapGetters("journal", ["getEntryById"]),
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
    ...mapActions("journal", ["updateEntry", "createEntry", "deleteEntry"]),
    async loadEntry() {
      let entry;

      if (this.id === "new") {
        entry = {
          text: "",
          date: new Date().getTime(),
        };
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }
      this.entry = entry;
    },
    async saveEntry() {
      new Swal({
        title: "Un momento... pofa",
        allowOutsideClick: false,
      });
      Swal.showLoading();

      //console.log('Guardando')
      if (this.entry.id) {
        await this.updateEntry(this.entry);
      } else {
        // console.log('new entry')
        const id = await this.createEntry(this.entry);
        this.$router.push({ name: "entry-view", params: { id } });
      }
      Swal.fire("Registrado", "Entrada Guardada correctamente", "success");
    },
    async onDeleteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: "Deseas eliminar esta entrada?",
        text: "No se podra recuperar una vez eliminado",
        showDenyButton: true,
        confirmButtonText: "Estoy seguro, Eliminar",
      });
      if (isConfirmed) {
        new Swal({
          title: "Espera...",
          allowOutsideClick: false,
        });
        Swal.showLoading();
        await this.deleteEntry(this.entry.id);
        this.$router.push({ name: "no-entry" });

        Swal.fire("Eliminado", "", "success");
      }
    },
    onSelectedImage(event) {
      const file = event.target.files[0];
      if (!file) {
        this.localImage = null;
        this.file = null;
        return;
      }
      this.file = file;
      const fr = new FileReader();
      fr.onload = () => (this.localImage = fr.result);
      fr.readAsDataURL(file);
    },
    onSelectImage() {
      this.$refs.imageSelector.click();
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
