<script setup>
import { useStore } from "../store";
import axios from "axios";
import { RouterLink } from "vue-router";

import { ref } from "vue";

const store = useStore();
store.getPlaylist();
let song = ref(0);
let errorplay = ref(false);

const next_song = () => {
  if (song.value != store.music.length - 1) {
    ++song.value;
  } else {
    errorplay.value = true;
  }
  console.log("Current song index:", song.value);
};

const prev_song = () => {
  if (song.value != 0) {
    --song.value;
  } else {
    errorplay.value = true;
  }
};
</script>

<template>
  <RouterLink id="back" :to="{ name: 'Home' }"
    ><font-awesome-icon
      style="width: fit-content"
      icon="fa-solid fa-arrow-left"
  /></RouterLink>

  <!-- <div v-for="element in store.music">
    <h1>{{ element.name }}</h1>
    <h2>{{ element.artist }}</h2>
    <img :src="`${element.poster}`" />
    <audio controls>
      <source :src="`src/assets/${element.name}.mp3`" type="audio/mpeg" />
    </audio>
  </div> -->
  <div id="background">
    <h1 id="title">{{ store.music[song].name }}</h1>
    <h2 id="artist">{{ store.music[song].artist }}</h2>
    <img :src="`${store.music[song].poster}`" id="poster" />
    <br />
    <br />
    <div v-for="(element, index) in store.music">
      <audio controls id="player" v-if="song == index">
        <source :src="`src/assets/${element.name}.mp3`" type="audio/mpeg" />
      </audio>
    </div>
    <br />
    <font-awesome-icon
      icon="fa-solid fa-forward"
      @click="next_song()"
      class="button right"
    />
    <font-awesome-icon
      icon="fa-solid fa-backward"
      @click="prev_song()"
      class="button left"
    />
  </div>
  <!-- src\assets\LOVELY BASTARDS.mp3 -->
</template>

<style scoped>
#back {
  background-color: rgb(52, 85, 174);
  color: white;
  width: 30px;
  /* border: 2px solid white; */
  font-size: 3rem;
  position: absolute;
  left: 1%;
}

#back:hover {
  color: black;
  transition-duration: 0.5s;
}
.left {
  position: absolute;
  right: 70%;
  top: 40%;
  color: black;
}

.right {
  position: absolute;
  left: 70%;
  top: 40%;
  color: black;
}

#title {
  color: white;
  text-align: center;
}

#artist {
  color: white;
  text-align: center;
}
#poster {
  position: relative;
  left: calc(50% - 320px);
  border-radius: 1rem;
  border: 2px inset white;
  /* right: 320px; */
}
#background {
  background-color: rgb(52, 85, 174);
  height: 100vh;
}
.button {
  cursor: pointer;
  width: 30px;
  font-size: 5rem;
  color: white;
}

#player {
  color: rgb(127, 65, 174);
  position: relative;
  left: calc(50% - 150px);
}
.button:hover {
  color: rgb(124, 202, 202);
  transition-duration: 0.5s;
  transform: scale(1.15);
}
</style>
