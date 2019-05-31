<template>
  <ChatTemplate :messages="messages" />
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
}
</script>

<style>

</style>
