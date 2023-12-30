<script setup>
// import { ref } from "vue";
import axios from "axios";
import { useStore } from "../store/index.js";
import { RouterLink } from "vue-router";
// import Vue from "vue";
import { ref, onMounted } from "vue";
// import VueGoogleApi from "vue-google-api";

// const events = ref([]);

// const listUpcomingEvents = async () => {
//   try {
//     const response = await this.$gapi.client.calendar.events.list({
//       calendarId: "primary",
//       timeMin: new Date().toISOString(),
//       showDeleted: false,
//       singleEvents: true,
//       maxResults: 10,
//       orderBy: "startTime",
//     });

//     events.value = response.result.items || [];
//   } catch (error) {
//     console.error("Error fetching events:", error);
//   }
// };

// onMounted(async () => {
//   await listUpcomingEvents();
// });
const store = useStore();

await store.get_news();
await store.get_weather();

const chosenArticle = (article_link, article_title) => {
  store.specific_article = [];
  store.specific_article.push(article_title);
  store.specific_article.push(article_link);
  store.get_summary(article_link);
};

let list_item = ref("");
// let todos = ref([]);

const clear = () => {
  list_item.value = "";
};

let edit = ref(true);
const canEdit = () => {
  edit.value = false;
};
const noEdit = () => {
  edit.value = true;
};

let crossedOut = ref(false);
const crossOut = () => {
  crossedOut.value = !crossedOut.value;
};

store.getPlaylist();
</script>
<template>
  <div id="background">
    <div class="item left">
      <h1 class="itemtitle">News</h1>
      <div id="news">
        <h2 id="headlines">Top Headlines:</h2>
        <RouterLink
          v-for="i in 2"
          :to="{ name: 'Article' }"
          @click="
            chosenArticle(store.USnews[i - 1].link, store.USnews[i - 1].title)
          "
          ><h3 class="newscontent">
            {{ store.USnews[i - 1].title }}
          </h3></RouterLink
        >
        <RouterLink
          v-for="i in 2"
          :to="{ name: 'Article' }"
          @click="
            chosenArticle(store.CAnews[i - 1].link, store.CAnews[i - 1].title)
          "
          ><h3 class="newscontent">
            {{ store.CAnews[i - 1].title }}
          </h3></RouterLink
        >
        <RouterLink class="buttondiv" :to="{ name: 'News' }">
          <button class="extrabutton">Extra</button>
        </RouterLink>
      </div>
    </div>
    <div class="item right">
      <h1 class="itemtitle">Weather</h1>
      <p>Location: {{ store.weather[0].loc }}</p>
      <div id="weatherbox">
        <h1>Temp: {{ store.weather[0].temp }} °C</h1>
        <p>Feels Like: {{ store.weather[0].feels_like }} °C</p>
        <p>Outside: {{ store.weather[0].weather }}</p>
      </div>
      <span class="AQI"
        >Air Quality (AQI): {{ store.weather[0].air_quality }}</span
      >
      <span class="AQI" v-if="store.weather[0].air_quality <= 3"> (Good)</span>
      <span class="AQI" v-else-if="store.weather[0].air_quality <= 6">
        (Moderate Danger)</span
      >
      <span class="AQI" v-else-if="store.weather[0].air_quality <= 10">
        (High Danger)</span
      >
      <span class="AQI" v-else> (Very High Danger)</span>
      <!-- <RouterLink class="buttondiv" :to="{ name: 'Weather' }">
        <button class="extrabutton">Extra</button>
      </RouterLink> -->
    </div>
    <div class="item left">
      <h1 class="itemtitle">Calendar</h1>
    </div>
    <div class="item right" id="todolist">
      <h1 class="itemtitle" id="list">List</h1>
      <!-- <input  type="text" class="todo" /> -->
      <!-- :readonly="isAdded" -->
      <textarea
        placeholder="Input item... (double click item to edit)"
        rows="1"
        v-model="list_item"
        class="todoinput"
        @keyup.enter="
          store.addToDos(list_item);
          clear();
        "
      ></textarea>
      <div v-for="index in store.todos.length">
        <textarea
          @dblclick="canEdit()"
          @keydown.enter="noEdit()"
          :readonly="edit"
          class="todo"
          :class="{ crossed: crossedOut }"
        >
        {{ store.todos[index - 1] }}
      </textarea
        >
        <input type="checkbox" @click="crossOut()" />
        <button @click="store.removeToDo(index - 1)" id="remove">Remove</button>
      </div>
    </div>
    <div class="item left">
      <h1 class="itemtitle">Vigor</h1>
      <RouterLink class="buttondiv" :to="{ name: 'Vigor' }">
        <button class="extrabutton">Extra</button>
      </RouterLink>
    </div>
    <div class="item right">
      <h1 class="itemtitle">Music</h1>
      <h1 id="playlistname">{{ store.playlist }}</h1>
      <img
        id="playlistphoto"
        :src="`${store.playlist_photo}`"
        alt="Playlist Photo"
      />
      <RouterLink :to="{ name: 'Music' }" class="buttondiv">
        <button class="extrabutton">Play</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
#background {
  padding: 1% 1% 0 1%;
  display: grid;
  background-color: rgb(211, 237, 245);
  grid-template: 3/2;
  size: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 29rem);
  gap: 12px 15px;
  padding-bottom: 10px;
}

#news {
  grid-column: 1/2;
  grid-row: 1/2;
  border-radius: 4px;
  border-style: solid;
  width: 100%;
}
#weather {
  grid-column: 2/3;
  grid-row: 1/2;
}
#calendar {
  grid-column: 1/2;
  grid-row: 2/3;
}
#list {
  grid-column: 2/3;
  grid-row: 2/3;
}
#vigor {
  grid-column: 1/2;
  grid-row: 3/4;
}
#music {
  grid-column: 2/3;
  grid-row: 3/4;
}

#headlines {
  padding-left: 3px;
  /* text-decoration: wavy; */
  font-style: italic;
}

.item {
  border-radius: 1rem;
  box-shadow: 3px 5px rgb(67, 63, 63);
}

.itemtitle {
  text-align: center;
  background-color: white;
  color: black;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  height: 15%;
}

.left {
  background-color: rgb(235, 207, 171);
}

.right {
  background-color: rgb(223, 205, 41);
}

#news {
  border: 0;
}
p,
span {
  font-size: 2rem;
}
.newscontent {
  color: black;
  font-family: Philosopher;
  font-size: 1.5rem;
  padding-left: 3%;
  padding-top: 3%;
  line-height: 1.4rem;
}

.newscontent:hover {
  color: rgb(70, 135, 189);
  transition-duration: 0.25s;
}

.buttondiv {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
}

.extrabutton {
  background-color: rgb(205, 122, 15);
}
.extrabutton:hover {
  transition-duration: 0.8s;
  background-color: rgb(223, 162, 82);
  transform: scale(1.06);
}

#weatherbox {
  text-align: center;
  border-radius: 1rem;
  border: 4px inset orangered;
  width: fit-content;
  padding: 10px;
  position: relative;
  left: 10%;
  top: 5%;
}
#weatherbox:hover {
  color: white;
  background-color: rgb(152, 97, 203);
  /* cursor: crosshair; */
  transition-duration: 1s;
}

.AQI {
  position: relative;
  top: 8%;
}

.todo {
  width: 85%;
  background-color: rgb(223, 205, 41);
  /* border-radius: 1rem; */
  margin: 0;
  /* padding: 0; */
  border: 0;
  max-height: 100%;
  resize: none;
  overflow-y: hidden;
  font-size: 1.3rem;

  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.crossed {
  text-decoration: line-through;
  width: 85%;
  background-color: rgb(223, 205, 41);
  /* border-radius: 1rem; */
  margin: 0;
  padding: 0;
  border: 0;
  max-height: 100%;
  resize: none; /* Disable manual resizing */
  overflow-y: hidden;
  font-size: 1.3rem;

  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.todoinput {
  width: 99%;
  color: black;
  background-color: rgb(223, 205, 41);
  /* border-radius: 1rem; */
  margin: 0;
  padding: 0;
  border: 0;
  max-height: 100%;
  resize: none; /* Disable manual resizing */
  overflow-y: hidden;
  outline: none;
  font-size: 1.4rem;
  padding-top: 1%;
  padding-left: 1%;
  /* height: 20%; */
  overflow-wrap: normal;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.todo:focus {
  border: 0;
}
#list {
  border-bottom: 2px solid black;
}
.sizeable {
  height: scrollHeight;
}

#todolist {
  resize: both; /* This enables resizing */
  overflow: scroll;
  display: inline-block; /* This prevents the div from expanding to full width */
}

#remove {
  width: fit-content;
  padding: 2px;
}

#playlistphoto {
  border: 4px inset rgb(47, 232, 177);
  height: 50%;
  position: relative;
  left: 34%;
}
#playlistname {
  text-align: center;
  padding-bottom: 10px;
}
</style>
