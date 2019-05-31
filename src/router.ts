import Vue from "vue";
import Router from "vue-router";
import ChatPage from "./views/ChatPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: ChatPage
    }
  ]
});
