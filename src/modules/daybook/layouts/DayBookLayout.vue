<template>
    <AppNavbar />

      <div v-if="isLoading"
      class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
          A moment please....
          <h3 class="mt-2">
            <i class="fa fa-spin fa-sync"></i>
          </h3>
        </div>
      </div>

    <div v-else 
    class="d-flex">
      <div class="col-4">
        <Entrylist/>
      </div>
      <div class="col">
        <router-view />
      </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    AppNavbar: defineAsyncComponent(() => import("../components/App-Navbar.vue")),
    Entrylist: defineAsyncComponent(()=> import ("../components/EntryList.vue"))
  },
  methods:{
    ...mapActions('journal', ['loadEntries'])
  },
//TODO: no me esta cargando correctamente
  computed:{
    ...mapState ('journal', ['isLoading'])
  },
  created(){
    this.loadEntries()
  }

};
</script>
