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
    <div class="row carousel-row">
      <div class="col-md-12">
        <video-carousel />
      </div>
    </div>
    <div class="row footer-row">
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

.couple {
  padding-top: 3vh;
  height: 35vh;
  max-width: 90%;
}

.angels {
  margin-top: 20px;
  padding: 10px;
  height: 60vh;
  max-width: 100%;
}

.couple,
.angels {
  margin: 0 auto;
  opacity: 0.7;
  transition: transform 0.5s, opacity 0.5s;
  /* transform: scale(0.9); */
}

.couple:hover,
.angels:hover {
  opacity: 1;
}

.couple:hover {
  transform: scale(1.2);
}

.footer-row
{
  margin-top: 12vh;
}
</style>
