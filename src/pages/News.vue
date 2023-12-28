<script setup>
import { useStore } from "../store";

const store = useStore();
</script>

<template>
  <!-- simple search bar + show all the main links + tech option-->

  <div>
    <input type="search" />
    <RouterLink :to="{ name: 'Article' }" v-for="element in store.USnews">
      <h1>{{ element.title }}</h1></RouterLink
    >
    <RouterLink :to="{ name: 'Article' }" v-for="element in store.CAnews">
      <h1>{{ element.title }}</h1></RouterLink
    >
  </div>
</template>

<style scoped>
h1 {
  padding: 10px;
  color: black;
  font-family: Philosopher;
  font-size: 1.5rem;
  line-height: 1.4rem;
}

h1:hover {
  color: rgb(70, 135, 189);
  transition-duration: 0.25s;
  cursor: pointer;
}
</style>
