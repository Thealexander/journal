<template>
    <AppNavbar />
    <div class="d-flex">
      <div class="col-4">
        <Entrylist/>
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    AppNavbar: defineAsyncComponent(() => import("../components/App-Navbar.vue")),
    Entrylist: defineAsyncComponent(()=> import ("../components/EntryList.vue"))
  },
};
</script>