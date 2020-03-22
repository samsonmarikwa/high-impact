<template>
  <div class="home-background">
    <div class="row">
      <div class="card text-center">
        <div class="card-header">
          <iframe
            class="iframe"
            :src="youtubeData.videoSrc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div class="card-body">
          <p class="card-text text-left">{{ youtubeData.figCaption }}</p>
        </div>
        <div class="card-footer text-muted text-center">{{ youtubeData.videoDate }}</div>
      </div>
    </div>
    <div class="row">
      <app-footer />
    </div>
  </div>
</template>

<script>
import Footer from "../footer/Footer.vue";

export default {
  components: {
    appFooter: Footer
  },
  name: "youtube",
  props: {
    youtubeData: { type: Object }
  }
};
</script>

<style scoped>
.logo {
  height: 100%;
  max-width: 60%;
  margin: 0 auto;
  opacity: 0.4;
}
</style>