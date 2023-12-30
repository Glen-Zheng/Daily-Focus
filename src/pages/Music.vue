<script setup>
import { useStore } from "../store";

const store = useStore();
</script>

<template>
  <div v-for="element in store.music">
    <h1>{{ element.name }}</h1>
    <h2>{{ element.artist }}</h2>
  </div>
</template>

<style scoped></style>
