<template>
  <div class="home">
    <div class="card" style="max-width: 100%;">
      <div class="row main-video">
        <div class="col-md-7">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube-nocookie.com/embed/CEC4otBiFyc?rel=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-md-5">
          <div class="card-body">
            <h4 class="card-title">Latest Sermon</h4>
            <h3>Father we love you from the Spirit</h3>
            <p class="card-text">
              Brother Jeremiah Davis singing from the Spirit - Father we love
              you.
            </p>
            <p class="card-text">
              <small class="text-muted">December 7, 2020</small>
            </p>
          </div>
          <hr />

          <div class="card-body">
            <h4 class="card-title">Testimonies</h4>
            <ul style="list-style-type:none">
              <router-link to="/" tag="li">
                <h5>Testimony One</h5>
                <p>
                  Describe situation and how God intervened<span
                    ><a>Learn more</a></span
                  >
                </p>
              </router-link>
              <router-link to="/" tag="li">
                <h5>Testimony Two</h5>
                <p>
                  Describe situation and how God intervened<span
                    ><a>Learn more</a></span
                  >
                </p>
              </router-link>
              <router-link to="/" tag="li">
                <h5>Testimony Three</h5>
                <p>
                  Describe situation and how God intervened<span
                    ><a>Learn more</a></span
                  >
                </p>
              </router-link>
              <router-link to="/" tag="li">
                <a>Click for more testimonies ...</a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.home {
  border: 1px solid #fff;
  color: #fff;
  background-color: #808080;
  width: 100%;
}
/*--------------------------*/
/* Reusable components      */
/*--------------------------*/
.row {
  max-width: 100%;
  /* margin: 10px auto; */
}

section {
  padding: 80px 0;
}

.box {
  padding: 1%;
}

/*--------------------------*/
/* Header                   */
/*--------------------------*/
header {
  /* background-image: linear-gradient(
      rgba(146, 180, 241, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(DoveBackground1.jpg); */
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  opacity: 0.9;
}

.logo-div {
  height: 80vh;
  width: 100%;
  margin-left: 20%;
  margin-right: 20%;
}
.logo {
  height: 100%;
  max-width: 60%;
  margin: 0 auto;
  opacity: 0.4;
}

.main-nav {
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
  font-size: 150%;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s;
}

.main-nav li a:hover,
.main-nav li a:active {
  border-bottom: 2px solid #e67e22;
}

.hero-text-box {
  position: absolute;
  width: 1140px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1,
h2,
h3 {
  font-weight: 300;
  text-transform: uppercase;
}

h1 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #fff;
  font-size: 240%;
  word-spacing: 4px;
  letter-spacing: 1px;
}

h2 {
  margin-bottom: 30px;
  font-size: 180%;
  word-spacing: 2px;
  text-align: center;
  letter-spacing: 1px;
}

h2:after {
  display: block;
  height: 2px;
  background-color: #e67e22;
  content: " ";
  width: 100px;
  margin: 0 auto;
  margin-top: 30px;
}

h3 {
  font-size: 110%;
  margin-bottom: 15px;
}

/*--------------------------*/
/* Paragraph                */
/*--------------------------*/
.long-copy {
  line-height: 140%;
  width: 70%;
  margin-left: 15%;
}

.box p {
  font-size: 90%;
  line-height: 145%;
}

/*---- ICONS ----*/
.icon-big {
  font-size: 350%;
  display: block;
  color: #e67e22;
  margin-bottom: 10px;
}

/*--------------------------*/
/* Buttons                  */
/*--------------------------*/
.btn:link,
.btn:visited {
  display: inline-block;
  padding: 10px 30px;
  font-weight: 300;
  text-decoration: none;
  border-radius: 200px;
  transition: background-color 0.2s, border 0.2s, color 0.2s;
}

.btn-full:link,
.btn-full:visited {
  background-color: #e67e22;
  border: 1px solid #e67e22;
  color: #fff;
  margin-right: 15px;
}

.btn-ghost:link,
.btn-ghost:visited {
  border: 1px solid #e67e22;
  color: #e67e22;
}

.btn:hover,
.btn:active {
  background-color: #cf6d17;
}

.btn-full:hover,
.btn-full:active {
  border: 1px solid #cf6d17;
}

.btn-ghost:hover,
.btn-ghost:active {
  border: 1px solid #cf6d17;
  color: #fff;
}

/*--------------------------*/
/* features                 */
/*--------------------------*/
.section-features .long-copy {
  margin-bottom: 30px;
}
/*--------------------------*/
/* meals                    */
/*--------------------------*/

.section-meals {
  padding: 0;
}

.meals-showcase {
  list-style: none;
  width: 100%;
}

.meals-showcase li {
  display: block;
  float: left;
  width: 25%;
}

.meal-photo {
  width: 100%;
  margin: 0;
  overflow: hidden;
  background-color: #000;
}

.meal-photo img {
  opacity: 0.7;
  width: 100%;
  height: auto;
  transform: scale(1.15);
  transition: transform 0.5s, opacity 0.5s;
}

.meal-photo img:hover {
  opacity: 1;
  transform: scale(1.03);
}

/*--------------------------*/
/* how it works                    */
/*--------------------------*/
.section-steps {
  background-color: #f4f4f4;
}
.steps-box:first-child {
  text-align: right;
  padding-right: 3%;
  margin-top: 30px;
}

.steps-box:last-child {
  padding-left: 3%;
  margin-top: 70px;
}

.app-screen {
  width: 40%;
}

.works-step {
  margin-bottom: 50px;
}

.works-step:last-of-type {
  margin-bottom: 80px;
}

.works-step div {
  color: #e67e22;
  border: 2px solid #e67e22;
  display: inline-block;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  text-align: center;
  padding: 5px;
  float: left;
  font-size: 150%;
  margin-right: 25px;
}

.btn-app img {
  height: 50px;
  width: auto;
  margin-right: 10px;
}
</style>
