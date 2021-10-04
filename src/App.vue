<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
  import API from "@/services/api";
  import { mapActions } from 'vuex'
  export default {
    created() {
      API.SET_AXIOS_BASE_URL();
      this.getAllStores();
    },
    methods: {
        ...mapActions('stores', [
        'getAllStores'
      ]),
    }  
  }
</script>

<style>
</style>
