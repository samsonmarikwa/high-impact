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

</style>
