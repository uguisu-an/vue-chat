import Vue from "vue";
import Vuex from "vuex";
import { getAllMessages, Message, sendMessage } from "./api/message-api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [] as Message[]
  },
  mutations: {
    setMessages(state, messages) {
      state.messages = messages;
    }
  },
  actions: {
    async initMessages({ commit }) {
      const messages = await getAllMessages();
      commit("setMessages", messages);
    },
    async sendMessage({ commit }, message) {
      await sendMessage(message);
    }
  }
});
