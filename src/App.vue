<template>
  <div class = "body">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style>
.row {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
