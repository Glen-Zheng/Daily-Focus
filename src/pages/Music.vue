<script setup>
import { useStore } from "../store";
import axios from "axios";

const store = useStore();
console.log(store.music);
</script>

<template>
  <div v-for="element in store.music">
    <h1>{{ element.name }}</h1>
    <h2>{{ element.artist }}</h2>
    <audio controls>
      <source :src="`src/assets/${element.name}.mp3`" type="audio/mpeg" />
    </audio>
  </div>
  <!-- src\assets\LOVELY BASTARDS.mp3 -->
</template>

<style scoped></style>
