import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import CommunityWidgets from "./views/CommunityWidgets.vue";
import PrivacyPolicy from "./views/PrivacyPolicy.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/community",
    name: "Community Widgets",
    component: CommunityWidgets,
  },
  {
    path: "/privacy",
    name: "Privacy Policy",
    component: PrivacyPolicy,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
  },
});

createApp(App).use(router).mount("#app");
