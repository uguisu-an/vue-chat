import Vue from "vue";
import Router from "vue-router";
import ChatPage from "./views/ChatPage.vue";
import TestPage from "./views/TestPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: ChatPage
    },
    {
      path: "/test",
      name: "test",
      component: TestPage
    }
  ]
});
