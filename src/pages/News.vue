<script setup>
import { useStore } from "../store";
import { ref } from "vue";
import axios from "axios";

const store = useStore();

const chosenArticle = (article_link, article_title) => {
  store.specific_article = [];
  store.specific_article.push(article_title);
  store.specific_article.push(article_link);
  store.get_summary(article_link);
};

let search_item = ref();

let search = async (searchedthing) => {
  let response = await axios.get(
    `https://newsapi.org/v2/everything?q=${searchedthing}&apiKey=789c5ce81e9242e2b68da6537f2972f5`
  );
  store.CAnews = [];
  store.USnews = [];
  for (let i = 0; i < 20; ++i) {
    if (response.data.articles[i].title != "[Removed]") {
      store.USnews.push({
        title: response.data.articles[i].title,
        link: response.data.articles[i].url,
      });
    }
  }
  console.log(store.USnews);
};

let reOpenLatest = async () => {
  await store.get_news();
};

let openTech = async () => {
  let response = await axios.get(
    `https://newsapi.org/v2/top-headlines/sources?category=technology&apiKey=789c5ce81e9242e2b68da6537f2972f5`
  );
  store.USnews = [];
  store.CAnews = [];
  console.log(response);

  for (let element of response.data.sources) {
    if (element.title != "[Removed]") {
      store.USnews.push({
        title: element.description,
        link: element.url,
      });
    }
  }
  console.log(store.USnews);
};
</script>

<template>
  <!-- simple search bar + show all the main links + tech option-->

  <div>
    <h1 id="title">TOP News</h1>
    <label for="searchbar">Search: </label>
    <input
      id="searchbar"
      type="search"
      v-model="search_item"
      @keypress.enter="search(search_item)"
    />
    <br />
    <div id="margin">
      <span style="margin-left: 3%">categories: </span>
      <span @click="openTech()" class="categories">Tech </span>
      <span @click="reOpenLatest()" class="categories"> Latest</span>
    </div>
    <RouterLink
      class="sizefit"
      :to="{ name: 'Article' }"
      v-for="(element, index) in store.USnews"
      @click="
        chosenArticle(store.USnews[index].link, store.USnews[index].title)
      "
    >
      <h1 class="newsitem">{{ element.title }}</h1></RouterLink
    >
    <RouterLink
      :to="{ name: 'Article' }"
      class="sizefit"
      v-for="element in store.CAnews"
      @click="
        chosenArticle(store.CAnews[index].link, store.CAnews[index].title)
      "
    >
      <h1 class="newsitem">{{ element.title }}</h1></RouterLink
    >
  </div>
</template>

<style scoped>
.newsitem {
  padding: 10px;
  color: black;
  font-family: Philosopher;
  font-size: 1.5rem;
  line-height: 1.4rem;
  width: fit-content;
}

.newsitem:hover {
  color: rgb(70, 135, 189);
  transition-duration: 0.25s;
  cursor: pointer;
}

.sizefit {
  width: fit-content;
}
#title {
  font-size: 4rem;
  text-align: center;
  margin-top: 2%;
  position: sticky;
  top: 0;
}

#margin {
  margin-bottom: 1.53%;
  /* padding-bottom: 10%; */
}

.categories {
  cursor: pointer;
  font-size: 1.5rem;
  color: black;
}
.categories:hover {
  color: rgb(74, 124, 199);
  transition-duration: 0.5s;
}
</style>
