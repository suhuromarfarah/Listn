import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Mood from "../views/Mood.vue"; 
import Playlist from "../views/Playlist.vue"; 
import musicStat from "../components/musicStat.vue"; 
import Questions from "../views/Questions.vue"; 


// import Navbar from "src/components/Navbar.vue"; 


Vue.use(VueRouter);

const routes = [
  {

    path: "/Questions",
    name: "questions",
    component: Questions
  },
  {path:"/Mood",
    name: 'Mood',
    component: Mood
},
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/Playlist",
    name: "playlist",
    component: Playlist
  },
  {
    path: "/MakePlaylist",
    name: "MakePlaylist",
    // This is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "MakePlaylist" */ "../views/MakePlaylist.vue")
  },
  {
    path: "/Playlist",
    name: "playlist",
    component: () =>
      import(/* webpackChunkName: "MakePlaylist" */ "../views/Playlist.vue")
  },
  {
    path: "/musicStat",
    name: "musicStat",
    component: musicStat
  }
  
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
