<template>
  <div>
    <header>add card</header>
    <main></main>
    <footer>
      <input v-model="newCardName" type="text" />
      <button :disabled="!newCardName" @click="addCard">add card</button>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class AddToDoCard extends Vue {
  newCardName = "";
  addCard() {
    this.$store.dispatch("requestCreateToDo", this.newCardName);
  }
}
</script>
