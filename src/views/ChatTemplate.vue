<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <ChatMessage :message="message" />
      </li>
    </ul>
    <ChatForm @submit="add" />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import ChatMessage from "./ChatMessage.vue";
import ChatForm from "./ChatForm.vue";

@Component({
  components: {
    ChatMessage,
    ChatForm,
  }
})
export default class ChatTemplate extends Vue {
  @Prop({ default: () => [] }) messages!: any[];

  add(message: any) {
    this.$emit("add", message);
  }
}
</script>

<style>

</style>
