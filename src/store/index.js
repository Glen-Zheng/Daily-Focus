import axios from "axios";
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      news: [],
      weather: [],
      vigor: [],
      music: [],
    };
  },
  actions: {
    async get_news() {
      let us_news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=789c5ce81e9242e2b68da6537f2972f5`
      );
      console.log(us_news);
    },
  },
});
