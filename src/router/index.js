import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
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
  routes
});

export default router;
