<template>
  <div>
    <div class="home-background">
      <img :src="logoSrc" alt="High Impact Life Church" class="logo" />
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
      logoSrc: "logo.png"
    };
  }
};
</script>

<style scoped>
.home-background {
  text-align: center;
}
.logo {
  height: 100%;
  max-width: 60%;
  margin: 0 auto;
  opacity: 0.4;
}

</style>
