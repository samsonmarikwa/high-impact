<template>
  <div class="footer">
    <div class="row">
      <div class="col-md-3 logo-col">
        <img :src="logoSrc" alt="High Impact Life Church" class="footer-logo" />
      </div>
      <div class="col-md-3">
        <h4>Info</h4>
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
        <h4>Ministries</h4>
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
        <h4>Visit Us</h4>
        <p>Events Calendar</p>
        <p>Chat online</p>
      </div>
    </div>
    <div class="row copyright">
      <div class="col-md-12">
        <h6>Copyright &copy;2020 High Impact Life Church</h6>
      </div>
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
.copyright {
  padding: 10px 5px;
  margin-top: 8px;
  border-top: 1px solid #636e72;
  text-align: center;
}
h4 {
  color: #3f4242;
}

.footer {
  font-size: 0.9em;
  color: #636e72;
  background-color: #a9a9a9;
}
.footer a {
  color: #636e72;
}
.logo-col {
  text-align: center;
}
.footer-logo {
  margin-top: 4vh;
  height: 15vh;
  max-width: 40%;
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
  padding-left: 0;
}
</style>