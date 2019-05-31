<template>
  <ChatTemplate :messages="messages" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChatTemplate from "./ChatTemplate.vue";

@Component({
  components: {
    ChatTemplate
  }
})
export default class ChatPage extends Vue {
  messages = [
    {
      id: "1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus laudantium tempora animi repellendus delectus dicta iure reiciendis ut ad asperiores reprehenderit deleniti omnis expedita aspernatur, qui voluptatem explicabo culpa!",
    },
    {
      id: "2",
      body: "Lorem ipsum dolor sit amet qui voluptatem explicabo culpa!",
    },
    {
      id: "3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus laudantium tempora animi repellendus delectus dicta iure reiciendis ut ad asperiores reprehenderit deleniti omnis expedita aspernatur, qui voluptatem explicabo culpa!",
    },
    {
      id: "4",
      body: "Lorem ipsum dolor sit amet qui voluptatem explicabo culpa!",
    },
    {
      id: "5",
      body: "Lorem ipsum dolor sit amet qui voluptatem explicabo culpa!",
    },
    {
      id: "6",
      body: "Lorem ipsum dolor sit amet qui voluptatem explicabo culpa!",
    },
  ]
}
</script>

<style>

</style>
