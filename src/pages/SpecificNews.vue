<script setup>
import { useStore } from "../store";
import { ref } from "vue";
import axios from "axios";

const store = useStore();

// let link = ref(store.specific_article[1]);
// if (link) {
//   let summary = await axios.get(
//     `https://api.smmry.com?SM_API_KEY=${store.specific_article[1]}&SM_LENGTH=5&SM_API_KEY=5FBAF63690`
//   );
//   console.log(summary);
// }
// console.log(store);
</script>

<template>
  <!-- 5FBAF63690 -->
  <h1>{{ store.specific_article[0] }}</h1>
  <h3>Summary:</h3>
  <p>{{ store.summary }}</p>
  <br />
  <p>link:</p>
  <a :href="`${store.specific_article[1]}`" target="_blank">LINK TO ARTICLE</a>

  <!-- we saved the link and the description. PERFECT: we'll use some other AI api to summarize the link plus paste the link at the bottom. -->
</template>
<style scoped>
h3 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
  font-size: large;
  margin-top: 3%;
}
h1 {
  text-align: center;
}
</style>
