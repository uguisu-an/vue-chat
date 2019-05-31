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
    },
    addMessage(state, message) {
      state.messages.push(message);
    }
  },
  actions: {
    async initMessages({ commit }) {
      const messages = await getAllMessages();
      commit("setMessages", messages);
    },
    async sendMessage({ commit }, message) {
      const newMessage = await sendMessage(message);
      commit("addMessage", newMessage);
    }
  }
});
