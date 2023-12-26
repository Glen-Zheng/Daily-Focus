<script setup>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();

store.get_news();
// import { ref } from "vue";
// import { useStore } from "../store/index.js";
// import SiteModal from "./SiteModal.vue";
// import axios from "axios";

// const showModal = ref(false);
// const selectedId = ref(0);
// let genre = ref();

// const openModal = (id) => {
//   showModal.value = true;
//   selectedId.value = id;
// };

// const closeModal = () => {
//   showModal.value = false;
// };

// const store = useStore();
// if (store.moviesOutputted == false) {
//   await store.selection();
//   store.outputtedDone();
// }

// async function nextTrendingPage() {
//   store.movieSelection = [];
//   for (let i = 0; i < 3; i++) {
//     let response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day`, {
//       params: {
//         api_key: "da6aeec5bd0d488feeebd8b57deda080",
//         include_adult: false,
//         page: store.pageNum,
//       },
//     });
//     for (let movieData of response.data.results) {
//       store.movieSelection.push({
//         id: movieData.id,
//         poster: movieData.poster_path,
//       });
//     }
//     store.pageNum++;
//   }
// }

// async function previousTrendingPage() {
//   store.pageNum -= 6;
//   store.movieSelection = [];
//   for (let i = 0; i < 3; i++) {
//     let response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day`, {
//       params: {
//         api_key: "da6aeec5bd0d488feeebd8b57deda080",
//         include_adult: false,
//         page: store.pageNum,
//       },
//     });
//     for (let movieData of response.data.results) {
//       store.movieSelection.push({
//         id: movieData.id,
//         poster: movieData.poster_path,
//       });
//     }
//     store.pageNum++;
//   }
// }
</script>
<template>
  <div id="background">
    <div class="item left">
      <h1 class="itemtitle">News</h1>
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
</style>
