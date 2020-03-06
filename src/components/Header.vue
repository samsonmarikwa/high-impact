<template>
  <div>
    <header>
      <nav>
        <div class="row">
          <ul class="main-nav">
            <router-link to="/" tag="li" active-class="active" exact>
              <a>Home</a>
            </router-link>
            <router-link to="/about" tag="li" active-class="active">
              <a>About</a>
            </router-link>
            <router-link to="/media" tag="li" active-class="active">
              <a>Media</a>
            </router-link>
            <router-link to="/give" tag="li" active-class="active">
              <a>Give</a>
            </router-link>
            <router-link to="/events" tag="li" active-class="active">
              <a>Events</a>
            </router-link>
            <router-link to="/contacts" tag="li" active-class="active">
              <a>Contacts</a>
            </router-link>
          </ul>
        </div>
      </nav>
      <div class="logo-div">
        <img :src="logoSrc" alt="High Impact Life Church" class="logo" />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      logoSrc: 'logo.png'
    };
  }
};
</script>

<style scoped>

</style>
