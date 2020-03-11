<template>
  <div class="footer">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-3">
        <h4>Info</h4>
      </div>
      <div class="col-md-3">
        <h4>Ministries</h4>
      </div>
      <div class="col-md-3">
        <h4>Visit Us</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <img :src="logoSrc" alt="High Impact Life Church" class="logo" />
      </div>
      <div class="col-md-3">
        <p>
          <span>
            <img :src="addressIcon" alt="Address: " class="icons" />
          </span>Kingstones Building, 3rd Floor
          <br />
          <span>
            <img :src="addressIcon" alt="Address: " class="icons-opacity" />
          </span>Corner Takawira & Kwame Nkrumah
          <br />
          <span>
            <img :src="addressIcon" alt="Address: " class="icons-opacity" />
          </span>Harare, Zimbabwe
        </p>
        <p>
          <span>
            <img :src="clockIcon" alt="Time: " class="icons" />
          </span>Sunday: 1630 to 1800
        </p>
        <p>
          <span>
            <img :src="emailIcon" alt="Email: " class="icons" />
          </span>
          <a
            :href="'mailto:info@highimpactlifechurch.org'"
            target="_top"
          >info@highimpactlifechurch.org</a>
        </p>
        <p>
          <span>
            <img :src="telephoneIcon" alt="Call: " class="icons" />
          </span>+263 77 549 5542
        </p>
      </div>
      <div class="col-md-3">
        <ul>
          <router-link to="/" tag="li" active-class="active">
            <a>High Impact Ladies</a>
          </router-link>
          <router-link to="/" tag="li" active-class="active">
            <a>Men's Fellowship</a>
          </router-link>
          <router-link to="/" tag="li" active-class="active">
            <a>Sunday School</a>
          </router-link>
          <router-link to="/" tag="li" active-class="active">
            <a>Choir</a>
          </router-link>
        </ul>
      </div>
      <div class="col-md-3">
        <p>Events Calendar</p>
        <p>Chat online</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12" style="text-align: center">
        <hr>
        <h6>Copyright &copy;2020 High Impact Life Church</h6>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      logoSrc: "logo.png",
      addressIcon: "address-icon.png",
      clockIcon: "clock.png",
      emailIcon: "email.png",
      telephoneIcon: "telephone.png"
    };
  }
};
</script>

<style scoped>
.footer {
  color: #636e72;
  background-color: #a9a9a9;
  height: 40vh;
}

.footer a {
  color: #636e72;
}

.logo {
  margin-left: 20%;
  margin-right: 20%;
  height: 30vh;
  max-width: 60%;
}

.icons,
.icons-opacity {
  height: 25px;
  width: 25px;
  padding-right: 1px;
}
.icons-opacity {
  opacity: 0;
}

a {
  border-bottom: 25px solid transparent;
}

.col-md-3 ul {
  list-style-type: none;
}
</style>