import axios from "axios";
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      USnews: [],
      CAnews: [],
      specific_article: [],
      summary: "",
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
      let ca_news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=ca&apiKey=789c5ce81e9242e2b68da6537f2972f5`
      );

      for (let element of us_news.data.articles) {
        this.USnews.push({
          title: element.title,
          link: element.url,
        });
      }
      for (let element of ca_news.data.articles) {
        this.CAnews.push({
          title: element.title,
          link: element.url,
        });
      }
    },
    async get_weather() {
      let weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=43.65&lon=-79.38&appid=b0fe77d4e10a1aae089da85ab9634fd6&units=metric`
      );
      let aq = await axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=43.65&lon=-79.38&appid=b0fe77d4e10a1aae089da85ab9634fd6&units=metric`
      );
      //Toronto

      //   let uw_weather = await axios.get(
      //     `https://api.openweathermap.org/data/2.5/weather?lat=43.47&lon=-80.54&appid=b0fe77d4e10a1aae089da85ab9634fd6&units=metric`
      //   );
      //↑ UW when in waterloo.

      this.weather.push({
        loc: weather.data.name,
        temp: weather.data.main.temp,
        feels_like: weather.data.main.feels_like,
        weather: weather.data.weather[0].description,
        air_quality: aq.data.list[0].main.aqi,
        //index 4 for AQI - not too reusable (since it's at this fixed index)
      });
    },
    async get_summary(url) {
      const response = await axios.get(
        `https://api.smmry.com/?SM_LENGTH=5&SM_URL=${url}&SM_API_KEY=5FBAF63690`
      );
      this.summary = response.data.sm_api_content;
      console.log(response);
    },
  },
});
