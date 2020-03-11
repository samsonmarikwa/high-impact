<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <carousel-3d
          :autoplay="autoplay"
          :autoplay-timeout="5000"
          :display="5"
          :width="630"
          :height="550"
          :space="350"
        >
          <slide v-for="(slide, i) in slides" :index="i" :key="i">
            <figure @click="stopAutoplay">
              <!-- @click should enlarge play area and load component with iframe -->
              <p class="title">{{ slide.videoTitle }}</p>
              <img :src="slide.image" width="100%" height="520" alt="Image" />
              <!-- <iframe
            width="100%"
            height="400"
            :src="slide.src"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
              ></iframe>-->
              <figcaption>{{ slide.figCaption }}</figcaption>
            </figure>
          </slide>
        </carousel-3d>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <app-footer />
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import Footer from "./footer/Footer.vue";
export default {
  components: {
    "carousel-3d": Carousel3d,
    slide: Slide,
    appFooter: Footer
  },
  data() {
    return {
      autoplay: true,
      slides: [
        {
          videoTitle: "Singing in tongues",
          image: "https://img.youtube.com/vi/CEC4otBiFyc/maxresdefault.jpg",
          src: "https://www.youtube-nocookie.com/embed/CEC4otBiFyc?rel=0",
          figCaption:
            "The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly!"
        },
        {
          videoTitle: "The demands of prophecy",
          image: "https://img.youtube.com/vi/9I3J9PqKpBg/maxresdefault.jpg",
          src: "https://www.youtube-nocookie.com/embed/9I3J9PqKpBg?rel=0",
          figCaption:
            "The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly!"
        },
        {
          videoTitle: "Prophetic move",
          image: "https://img.youtube.com/vi/gk9AgKe2xDw/maxresdefault.jpg",
          src: "https://www.youtube-nocookie.com/embed/gk9AgKe2xDw?rel=0",
          figCaption:
            "The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly!"
        },
        {
          videoTitle: "Power in praying in tongues",
          image: "https://img.youtube.com/vi/Sm1_8JMTJZ8/maxresdefault.jpg",
          src: "https://www.youtube-nocookie.com/embed/Sm1_8JMTJZ8?rel=0",
          figCaption:
            "The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly!"
        },
        {
          videoTitle: "Prophetic Message for Zimbabwe 1",
          image: "https://img.youtube.com/vi/sj_XVY1I3TU/maxresdefault.jpg",
          src: "https://www.youtube-nocookie.com/embed/sj_XVY1I3TU?rel=0",
          figCaption:
            "The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly!"
        },
        {
          videoTitle: "Prophetic Message for Zimbabwe 2",
          image: "https://img.youtube.com/vi/fLvqOhn8pxw/maxresdefault.jpg",
          src: "https://www.youtube-nocookie.com/embed/fLvqOhn8pxw?rel=0",
          figCaption:
            "The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly!"
        },
        {
          videoTitle: "Prophetic Message for Mnangagwa",
          image: "https://img.youtube.com/vi/DQ5gw0Po6lQ/maxresdefault.jpg",
          src: "https://www.youtube-nocookie.com/embed/DQ5gw0Po6lQ?rel=0",
          figCaption:
            "The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly! The sky is the limit only for those who aren't afraid to fly!"
        }
      ]
    };
  },
  methods: {
    stopAutoplay() {
      this.autoplay = false;
      console.log(this.autoplay);
    }
  }
};
</script>

<style scoped>
.row {
  /* padding: 1px; */
  margin: 0 auto;
}
.col-md-4 {
  padding: 0px;
  margin: 0px;
}

.carousel-3d-container .carousel-3d-slide {
  padding: 0px;
}

.carousel-3d-container .carousel-3d-slide .title {
  font-size: 18px;
}

.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
</style>
