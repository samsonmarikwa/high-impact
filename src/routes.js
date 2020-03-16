import Home from "./components/home/Home.vue";
import About from "./components/about/About.vue";
import Media from "./components/media/Media.vue";
import Give from "./components/give/Give.vue";
import Events from "./components/programmes/Events.vue";
import Contacts from "./components/contacts/Contacts.vue";
import Youtube from "./components/youtube/Video.vue";

export const routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/media",
    component: Media
  },
  {
    path: "/give",
    component: Give
  },
  {
    path: "/events",
    component: Events},
  {
    path: "/contacts",
    component: Contacts},
  {
    path: '/video/:youtubeData',
    name: 'youtube',
    component: Youtube,
    props: true
  },
  {
    path: "*", redirect: "/"
  }
];
