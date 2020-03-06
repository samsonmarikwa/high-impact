import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import About from "./components/about/About.vue";
import Media from "./components/media/Media.vue";
import Give from "./components/give/Give.vue";
import Events from "./components/event-programmes/Events.vue";
import Contacts from "./components/contacts/Contacts.vue";

export const routes = [
         {
           path: "",
           components: {
             default: Home,
             "header-top": Header
           }
         },
         {
           path: "/about",
           components: {
             default: About,
             "header-bottom": Header
           }
         },
         {
           path: "/media",
           components: {
             default: Media,
             "header-bottom": Header
           }
         },
         {
           path: "/give",
           components: {
             default: Give,
             "header-bottom": Header
           }
         },
         {
           path: "/events",
           components: {
             default: Events,
             "header-bottom": Header
           }
         },
         {
           path: "/contacts",
           components: {
             default: Contacts,
             "header-bottom": Header
           }
         },
         // { path: '*', redirect: {name: 'home'}}
         { path: "*", redirect: "/" }
       ];
