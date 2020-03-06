<template>
  <div>
    <h1>Give Page</h1>
    <hr />
    <button class="btn btn-primary" @click="navigateToHome">Go To Home</button>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>
