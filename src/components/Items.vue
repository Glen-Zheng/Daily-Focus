<script setup>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "../store/index.js";
import { RouterLink } from "vue-router";

const store = useStore();

await store.get_news();
await store.get_weather();

const chosenArticle = (article_link, article_title) => {
  store.specific_article = [];
  store.specific_article.push(article_title);
  store.specific_article.push(article_link);
  store.get_summary(article_link);
};
</script>
<template>
  <div id="background">
    <div class="item left">
      <h1 class="itemtitle">News</h1>
      <div id="news">
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
    </div>
    <div class="item left">
      <h1 class="itemtitle">Calendar</h1>
    </div>
    <div class="item right">
      <h1 class="itemtitle">List</h1>
    </div>
    <div class="item left">
      <h1 class="itemtitle">Vigor</h1>
    </div>
    <div class="item right">
      <h1 class="itemtitle">Music</h1>
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
  transition-duration: 2s;
  background-color: rgb(223, 162, 82);
  transform: scale(1.06);
}
</style>
