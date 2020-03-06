<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <router-link tag="button" :to="link" class="btn btn-primary">Edit User</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: '#data'
      }
    };
  },
  // route guard can also be implemented using the life cycle hook beforeRouteEnter directly
  // on the component.
  beforeRouteEnter(to, from, next) {
    // next() needs to be executed, either to proceed to the page, to redirect or to stay on
    // the parent page. Before next() is executed to proceed to load the page, the component
    // is not yet created, so reference to the component properties will fail. For example,
    // the data this.link, would be non-existent.
    next();

  }
};
</script>