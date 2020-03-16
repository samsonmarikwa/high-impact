<template>
  <div class="nav-background">
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
</template>

<script>
</script>

<style scoped>
.main-nav {
  line-height: 4vh;
  float: right;
  list-style: none;
  margin: auto;
  padding: 20px;
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
