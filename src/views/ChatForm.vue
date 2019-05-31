<template>
  <form @submit.prevent="submit">
    <textarea name="body" class="form-control" rows="4" v-model="message.body"></textarea>
    <button class="btn btn-primary btn-sm">Send</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ChatForm extends Vue {
  message = {
    body: ""
  }

  async submit() {
    await this.$emit("submit", this.message);
    this.message.body = "";
  }
}
</script>

<style>

</style>
