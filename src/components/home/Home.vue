<template>
  <div>
    <div class="home-background">
      <div class="row">
        <div class="col-md-9">
          <img :src="logoSrc" alt="High Impact Life Church" class="logo" />
        </div>
        <div class="col-md-3">
          <img :src="coupleSrc" alt="Prophet Jeremiah and Marble Davis" class="couple" />
          <br />
          <img :src="angelsSrc" alt="Activate Angels" class="angels" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <video-carousel />
      </div>
    </div>
    <div class="row">
      <app-footer />
    </div>
  </div>
</template>

<script>
import VideoCarousel from "../video-carousel/video-carousel.vue";
import Footer from "../footer/Footer.vue";

export default {
  components: {
    VideoCarousel,
    appFooter: Footer
  },
  data() {
    return {
      logoSrc: "logo.png",
      coupleSrc: "Couple.jfif",
      angelsSrc: "angels.jfif"
    };
  }
};
</script>

<style scoped>
.home-background {
  text-align: center;
}

.logo {
  padding: 5vh;
  height: 80vh;
  max-width: 90%;
  margin: 0 auto;
  opacity: 0.6;
}
.couple {
  padding-top: 2vh;
  height: 30vh;
  max-width: 80%;
  margin: 0 auto;
  opacity: 0.8;
}

.angels {
  padding: 10px;
  height: 60vh;
  max-width: 100%;
  margin: 0 auto;
  opacity: 0.8;
}
</style>
