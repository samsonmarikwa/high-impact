<template>
  <div>
    <carousel-3d
      :autoplay="autoplay"
      :autoplay-timeout="7000"
      :display="5"
      :width="750"
      :height="550"
      :space="350"
    >
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <figure>
          <p class="title">{{ slide.videoTitle }}</p>
          <img :src="slide.image" width="100%" height="520" alt="Image" />

          <figcaption>
            <div>{{ slide.figCaption }}</div>
            <div class="video-date text-muted">Date Published: {{ slide.videoDate }}</div>
            <div class="play">
              <button @click="playVideo(i)">
                <img src="youtube-play-button.png" class="icons" />
              </button>
            </div>
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    "carousel-3d": Carousel3d,
    slide: Slide
  },
  methods: {
    playVideo(index) {
      let youtubeData = {
        videoTitle: this.slides[index].videoTitle,
        videoSrc: this.slides[index].videoSrc,
        figCaption: this.slides[index].figCaption,
        videoDate: this.slides[index].videoDate
      };
      this.$router.push({
        name: "youtube",
        params: {
          youtubeData
        }
      });
    }
  },

  data() {
    return {
      logoSrc: "logo.png",
      autoplay: true,
      slides: [
        {
          videoTitle: "Singing in tongues",
          image: "https://img.youtube.com/vi/CEC4otBiFyc/maxresdefault.jpg",
          videoSrc: "https://www.youtube.com/embed/CEC4otBiFyc?rel=0",
          videoDate: "January 11, 2020",
          figCaption:
            "Father we love you. When in the presence of the Father, there are a few words you utter. " +
            "If you find yourself in a need, find yourself a place to worship God. In the realm of " +
            "worship, all that you need is answered. God responds to that which you did not pray for."
        },
        {
          videoTitle: "The demands of prophecy",
          image: "https://img.youtube.com/vi/9I3J9PqKpBg/maxresdefault.jpg",
          videoSrc: "https://www.youtube.com/embed/9I3J9PqKpBg?rel=0",
          videoDate: "March 3, 2020",
          figCaption:
            '1 Timothy 4:14 "Do not neglect the gift you have, which was given you by prophecy when the ' +
            "council of eldership laid their hands on you. 15. Practice these things, immerse yourself in " +
            "them, so that all may see your progress."
        },
        {
          videoTitle: "Understanding The Prophetic Move",
          image: "https://img.youtube.com/vi/gk9AgKe2xDw/maxresdefault.jpg",
          videoSrc: "https://www.youtube.com/embed/gk9AgKe2xDw?rel=0",
          videoDate: "March 3, 2020",
          figCaption:
            "The church needs to prepare itself for the second coming of Jesus. 1 Thessalonians 5:19-21 " +
            "Do not quench the Spirit. Do not despise prophecies. Test all things; hold fast what is good. " +
            "Abstain from every form of evil"
        },
        {
          videoTitle: "Power in praying in tongues",
          image: "https://img.youtube.com/vi/Sm1_8JMTJZ8/maxresdefault.jpg",
          videoSrc: "https://www.youtube.com/embed/Sm1_8JMTJZ8?rel=0",
          videoDate: "January 30, 2020",
          figCaption:
            "1 Corinthians 14:2. For one who speaks in a tongue speaks not to men but to God; for no one " +
            "understands him, but he utters mysteries in the Spirit. 3. On the other hand, the one who " +
            "prophesies speaks to people for their upbringing and encouragement and consolation. 4. The " +
            "one who speaks in a tongue builds himself, but the one who prophesies builds up the church. 5. " +
            "Now I want you all to speak in tongues, but even more to prophesy."
        },
        {
          videoTitle:
            "Latest Prophecy : God wants President Mnangagwa to Resign",
          image: "https://img.youtube.com/vi/sj_XVY1I3TU/maxresdefault.jpg",
          videoSrc: "https://www.youtube.com/embed/sj_XVY1I3TU?rel=0",
          videoDate: "November 6, 2018",
          figCaption:
            "Watch brother Jeremiah as he expounds and interpret a vision that God entrusted him with " +
            "pertaining the leadership of Zimbabwe. Watch and pray for the will of God to prevail in Zimbabwe"
        },
        {
          videoTitle: "Prophetic Message for Zimbabwe",
          image: "https://img.youtube.com/vi/fLvqOhn8pxw/maxresdefault.jpg",
          videoSrc: "https://www.youtube.com/embed/fLvqOhn8pxw?rel=0",
          videoDate: "November 4, 2019",
          figCaption: "The second storm of suffering for the people of Zimbabwe"
        },
        {
          videoTitle: "Prophetic warning to Mnangagwa",
          image: "https://img.youtube.com/vi/DQ5gw0Po6lQ/maxresdefault.jpg",
          videoSrc: "https://www.youtube.com/embed/DQ5gw0Po6lQ?rel=0",
          videoDate: "July 14, 2018",
          figCaption:
            "Prophetic word before elections, a make or break for Zimbabweans. A call for intercessors " +
            "to stand in the gap to change the trajectory of events that will lead to the nation of Zimbabwe crumbling."
        }
      ]
    };
  }
};
</script>

<style scoped>
.carousel-3d-container .carousel-3d-slide {
  padding: 0px;
}

.video-date {
  padding: 8px;
  font: 12px cursive #cf6d17;
  text-align: center;
}
.carousel-3d-container .carousel-3d-slide .title {
  font-size: 18px;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  letter-spacing: 1.5px;
}

.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  letter-spacing: 1.5px;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 10px 10px 6px;
  font-size: 14px;
  min-width: 100%;
  box-sizing: border-box;
}

.play {
  border-top: 1px solid #a9a9a9;
  padding-top: 5px;
  padding-bottom: 5px;
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
