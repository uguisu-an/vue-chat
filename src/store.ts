import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [
      {
        id: "1",
        body:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus laudantium tempora animi repellendus delectus dicta iure reiciendis ut ad asperiores reprehenderit deleniti omnis expedita aspernatur, qui voluptatem explicabo culpa!"
      },
      {
        id: "2",
        body: "Lorem ipsum dolor sit amet qui voluptatem explicabo culpa!"
      },
      {
        id: "3",
        body:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus laudantium tempora animi repellendus delectus dicta iure reiciendis ut ad asperiores reprehenderit deleniti omnis expedita aspernatur, qui voluptatem explicabo culpa!"
      },
      {
        id: "4",
        body: "Lorem ipsum dolor sit amet qui voluptatem explicabo culpa!"
      },
      {
        id: "5",
        body: "Lorem ipsum dolor sit amet qui voluptatem explicabo culpa!"
      },
      {
        id: "6",
        body: "Lorem ipsum dolor sit amet qui voluptatem explicabo culpa!"
      }
    ]
  },
  mutations: {},
  actions: {}
});
