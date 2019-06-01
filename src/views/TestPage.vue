<template>
  <div class="container" style="width: 10rem;">
    <div class="task-group" v-for="tg in taskGroups" :key="tg.id">
      <a href="#" @click="currenctTaskGroup = tg">
        {{tg.name}}
      </a>
      <div class="task-group__modal p-2 border bg-light" v-if="currenctTaskGroup === tg">
        <h5>{{ tg.name }}</h5>
        <button @click="currenctTaskGroup = null" class="btn btn-sm btn-primary">OK</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class TestPage extends Vue {
  currenctTaskGroup = null;
  taskGroups = [
    { id: 1, name: "Hello world"},
    { id: 2, name: "Hi!"},
    { id: 3, name: "Bye"},
    { id: 4, name: "Task 4"},
  ]


  test1 = false;
}
</script>

<style lang="scss" scoped>
.task-group {
  position: relative;
}

.task-group__modal {
  position: absolute;
  left: 0;
  top: 1.5rem;
  width: 16rem;
  height: 10rem;
  z-index: 100;
}
</style>
