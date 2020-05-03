<template>
  <div>
    <template v-if="loading">Loading...</template>
    <template v-else>
      <ToDoCard v-for="toDo in toDoList" :key="toDo.id" :toDo="toDo" class="card" />
    </template>

    <AddToDoCard class="card" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import AddToDoCard from "@/components/AddToDoCard.vue";
import ToDoCard from "@/components/ToDoCard.vue";
@Component({
  components: {
    AddToDoCard,
    ToDoCard
  }
})
export default class Home extends Vue {
  loading = true;
  created() {
    this.$store.dispatch("requestToDoList").finally(() => {
      this.loading = false;
    });
  }
  get toDoList() {
    return this.$store.getters.getToDoList;
  }
}
</script>
