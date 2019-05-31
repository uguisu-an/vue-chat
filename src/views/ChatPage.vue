<template>
  <ChatTemplate :messages="messages" @add="addMessage" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import ChatTemplate from "./ChatTemplate.vue";
import { Message } from '../api/message-api';

@Component({
  components: {
    ChatTemplate
  },
  computed: mapState({
    messages: (state: { messages: Message[] }) => state.messages
  })
})
export default class ChatPage extends Vue {
  created() {
    this.$store.dispatch("initMessages");
  }

  addMessage(message: any) {
    this.$store.dispatch("sendMessage", message);
  }
}
</script>

<style>

</style>
