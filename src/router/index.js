import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Weather from "../pages/Weather.vue";
import News from "../pages/News.vue";
import Calendar from "../pages/Calendar.vue";
import Vigor from "../pages/Vigor.vue";
import Music from "../pages/Music.vue";
import List from "../pages/List.vue";
import Article from "../pages/SpecificNews.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Weather",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/News",
    name: "News",
    component: News,
  },
  {
    path: "/Article",
    name: "Article",
    component: Article,
  },
  {
    path: "/Calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/Vigor",
    name: "Vigor",
    component: Vigor,
  },
  {
    path: "/List",
    name: "List",
    component: List,
  },
  {
    path: "/Music",
    name: "Music",
    component: Music,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
