<template>
  <div class="nav-background">
    <nav>
      <ul class="main-nav">
        <router-link to="/" tag="li" active-class="active" exact>
          <a class="btn">Home</a>
        </router-link>
        <router-link to="/about" tag="li" active-class="active">
          <a class="btn">About</a>
        </router-link>
        <router-link to="/media" tag="li" active-class="active">
          <a class="btn">Media</a>
        </router-link>
        <router-link to="/give" tag="li" active-class="active">
          <a class="btn">Give</a>
        </router-link>
        <router-link to="/events" tag="li" active-class="active">
          <a class="btn">Events</a>
        </router-link>
        <router-link to="/contacts" tag="li" active-class="active">
          <a class="btn">Contacts</a>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
</script>

<style scoped>
.main-nav {
  line-height: 2vh;
  float: right;
  list-style: none;
  margin: auto;
  padding: 8px;
}

.main-nav li {
  display: inline-block;
  margin-left: 2px;
}

.main-nav li a:link,
.main-nav li a:visited {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 110%;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s;
}

.main-nav li a:hover,
.main-nav li a:active {
  border-bottom: 2px solid #e67318;
}
</style>
