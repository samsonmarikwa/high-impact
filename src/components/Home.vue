<template>
  <div class="home">
    <div class="card" style="max-width: 100%;">
      <div class="row main-video">
        <div class="col-md-12">
          <div class="carousel-view">
            <transition-group class="carousel" tag="div">
              <div v-for="slide in slides" class="slide" :key="slide.id">
                <h4>{{ slide.title }}</h4>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube-nocookie.com/embed/CEC4otBiFyc?rel=0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </transition-group>
            <div class="carousel-controls">
              <button class="carousel-controls__button" @click="previous">
                prev
              </button>
              <button class="carousel-controls__button" @click="next">
                next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row main-video">
        <div class="col-md-12">
          <div class="card-body">
            <h4 class="card-title">Testimonies</h4>
            <ul style="list-style-type:none">
              <router-link to="/" tag="li">
                <h5>Testimony One</h5>
                <p>
                  Describe situation and how God intervened
                  <span>
                    <a>Learn more</a>
                  </span>
                </p>
              </router-link>
              <router-link to="/" tag="li">
                <h5>Testimony Two</h5>
                <p>
                  Now Describe situation and how God intervened
                  <span>
                    <a>Learn more</a>
                  </span>
                </p>
              </router-link>
              <router-link to="/" tag="li">
                <h5>Testimony Three</h5>
                <p>
                  Describe situation and how God intervened
                  <span>
                    <a>Learn more</a>
                  </span>
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

    <div class="footer">
      <app-footer />
    </div>
  </div>
</template>

<script>
import Footer from "./footer/Footer.vue";
export default {
  components: {
    appFooter: Footer
  },
  data() {
    return {
      slides: [
        {
          title: "I am Slide A",
          id: 1,
          src: "https://www.youtube-nocookie.com/embed/CEC4otBiFyc?rel=0"
        },
        {
          title: "I am Slide B",
          id: 2,
          src: "https://www.youtube-nocookie.com/embed/CEC4otBiFyc?rel=0"
        },
        {
          title: "I am Slide C",
          id: 3,
          src: "https://www.youtube-nocookie.com/embed/CEC4otBiFyc?rel=0"
        },
        {
          title: "I am Slide D",
          id: 4,
          src: "https://www.youtube-nocookie.com/embed/CEC4otBiFyc?rel=0"
        },
        {
          title: "I am Slide E",
          id: 5,
          src: "https://www.youtube-nocookie.com/embed/CEC4otBiFyc?rel=0"
        }
      ]
    };
  },
  methods: {
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    }
  }
};
</script>

<style scoped>
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 100%;
  /* 24em; */
  min-height: 35em;
}
.slide {
  flex: 0 0 33%;
  height: 30em;
  /* margin: 1em; */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1em solid #000;
  /* border-radius: 50%; */
  transition: transform 0.3s ease-in-out;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
.carousel-controls__button {
  color: #fff;
  background-color: #555;
}
</style>
