import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import About from "./components/about/About.vue";
import Media from "./components/media/Media.vue";
import Give from "./components/give/Give.vue";
import Events from "./components/event-programmes/Events.vue";
import Contacts from "./components/contacts/Contacts.vue";
import Video from "./components/video/Video.vue";

const parseProps = r => ({ title: r.params.title });

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
    path: '/video',
    name: 'video',
    component: Video,
    props: parseProps
  },
  // { path: '*', redirect: {name: 'home'}}
  { path: "*", redirect: "/" }
];
