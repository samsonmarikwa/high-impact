<template>
  <div class="background">
    <!-- <header> -->

    <div class="row1">
      <nav>
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
      </nav>
    </div>
    <div class="logo-div">
      <img :src="logoSrc" alt="High Impact Life Church" class="logo" />
    </div>
    <!-- </header> -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      logoSrc: "logo.png"
    };
  }
};
</script>

<style scoped>
.main-nav {
  height: 5vh;
  float: right;
  list-style: none;
  margin: 30px 40px 5px;
}

.main-nav li {
  display: inline-block;
  margin-left: 40px;
}

.main-nav li a:link,
.main-nav li a:visited {
  padding: 8px 0;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 140%;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s;
}

.main-nav li a:hover,
.main-nav li a:active {
  border-bottom: 2px solid #e67e22;
}
</style>
