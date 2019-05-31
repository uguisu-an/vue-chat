<template>
  <div>
    {{ message.body }}
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component({})
export default class ChatMessage extends Vue {
  @Prop({ required: true }) message!: {
    id: string;
    body: string;
  }
}
</script>

<style>

</style>
