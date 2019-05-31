<template>
  <ChatTemplate :messages="messages" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import ChatTemplate from "./ChatTemplate.vue";

@Component({
  components: {
    ChatTemplate
  },
  computed: mapState({
    messages: state => state.messages
  })
})
export default class ChatPage extends Vue {}
</script>

<style>

</style>
