<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <carousel-3d
          :autoplay="autoplay"
          :autoplay-timeout="5000"
          :display="5"
          :width="750"
          :height="550"
          :space="350"
        >
          <slide v-for="(slide, i) in slides" :index="i" :key="i">
            <figure>
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
                <figcaption>
                  <div>
                  {{ slide.figCaption }}
                  </div>
                  <div class="play">
                  <button @click="playVideo(i)"><img src="youtube-play-button.png" class="icons"/></button>
                  </div>
                  </figcaption>
            </figure>
          </slide>
        </carousel-3d>
      </div>
    </div>
    <div class="row footer">
      <!-- <div class="col-md-12"> -->
        <app-footer />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import Footer from "./footer/Footer.vue";
// import router from "vue-router";

export default {
  components: {
    "carousel-3d": Carousel3d,
    slide: Slide,
    appFooter: Footer
  },
  methods: {
    playVideo(index) {
      console.log("Image clicked" + index);
      console.log(this.slides[index].videoTitle);
      this.$router.push({ name: 'video', params: {
        title: this.slides[index].videoTitle,
        src: this.slides[index].src
      }})
    }
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
  }
};
</script>

<style scoped>
.footer {
  color: #636e72;
  background-color: #a9a9a9;
  /* height: 30vh; */
}
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
  padding: 10px 5px 0px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

.play {
  border-top: 1px solid #a9a9a9;
  margin-top: 1px;
  text-align: center;
}

.icons {
  margin-top: 2.5px;
  height: 25px;
  width: 55px;
}
.icons-opacity {
  opacity: 0.5;
}
</style>
