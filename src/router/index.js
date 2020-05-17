import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Mood from "../views/Mood.vue"; 
import Questions from "../views/Questions.vue"; 
// import Navbar from "src/components/Navbar.vue"; 


Vue.use(VueRouter);

const routes = [
  // {
  
  //   path: "/login",
  //   name: "login",
  //   component: Login
  // },
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
    path: "/Questions",
    name: "questions",
    component: Questions
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
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
