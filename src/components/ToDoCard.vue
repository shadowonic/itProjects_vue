<template>
  <div>
    <header>{{ toDo.name }}</header>
    <main>
        <ul>
            <li v-for="task in toDo.tasks" :key="task.id">
                {{ task.value }}
            </li>
        </ul>
    </main>
    <footer>
      <input v-model="newTaskName" type="text" />
      <button :disabled="!newTaskName" @click="addTask">add task</button>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ToDo } from "../models";
@Component({})
export default class ToDoCard extends Vue {
  @Prop() toDo!: ToDo;

  newTaskName = "";

  addTask() {
      this.$store.dispatch('requestCreateTask', {toDoId: this.toDo.id, value: this.newTaskName})
  }
}
</script>
