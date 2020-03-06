<template>
  <div>
    <router-view name="header-top"></router-view>
    <router-view></router-view>
    <router-view name="header-bottom"></router-view>
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
/* Orange color: #e67e22 */

/*--------------------------*/
/* Basic setup              */
/*--------------------------*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #fff;
  color: #555;
  font-family: "Lato", "Arial", sans-serif;
  font-size: 20px;
  font-weight: 300;
  text-rendering: optimizeLegibility;
}

.clearfix {
  zoom: 1;
}
.clearfix:after {
  content: ".";
  clear: both;
  display: block;
  height: 0;
  visibility: hidden;
}

</style>
