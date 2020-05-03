<template>
  <div >
    <ToDoCard class="card" />
    <AddToDoCard class="card" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';
import AddToDoCard from '@/components/AddToDoCard.vue'
import ToDoCard from '@/components/ToDoCard.vue'
@Component({
 components: {
   AddToDoCard,
   ToDoCard
 }
})
export default class Home extends Vue{
  created() {
    this.$api.toDo.addToDo({name: 'asd'})
  }

}
</script>
