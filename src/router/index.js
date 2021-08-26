import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/Home.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/artists",
    name: "Artists",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/artists/Artists.vue"),
  },
  {
    path: "/artist/:id",
    name: "Artist",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/artists/Artist.vue"),
    props: true,
  },
  {
    path: "/news",
    name: "News",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/news/News.vue"),
  },
  {
    path: "/news/:id",
    name: "NewsArticle",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/news/NewsArticle.vue"),
    props: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about/About.vue"),
  },
  {
    path: "/about/:id",
    name: "Agent",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about/Agent.vue"),
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
