import axios from "axios";
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      USnews: [],
      CAnews: [],
      specific_article: [],
      todos: [],
      summary: "",
      weather: [],
      vigor: [],
      music: [],
      playlist: "",
      playlist_photo: "",
    };
  },
  actions: {
    async get_news() {
      this.USnews = [];
      this.CAnews = [];
      let us_news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=789c5ce81e9242e2b68da6537f2972f5`
      );
      //   console.log(us_news);
      let ca_news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=ca&apiKey=789c5ce81e9242e2b68da6537f2972f5`
      );

      for (let element of us_news.data.articles) {
        if (element.title != "[Removed]") {
          this.USnews.push({
            title: element.title,
            link: element.url,
          });
        }
      }
      for (let element of ca_news.data.articles) {
        if (element.title != "[Removed]") {
          this.CAnews.push({
            title: element.title,
            link: element.url,
          });
        }
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
      this.weather = [];

      this.weather.push({
        loc: weather.data.name,
        temp: weather.data.main.temp,
        feels_like: weather.data.main.feels_like,
        weather: weather.data.weather[0].description,
        air_quality: aq.data.list[0].main.aqi,
        //index 4 for AQI - not too reusable (since it's at this fixed index)
      });
      console.log(this.weather);
    },
    async get_summary(url) {
      this.summary = "";
      const response = await axios.get(
        `https://api.smmry.com/?SM_LENGTH=5&SM_URL=${url}&SM_API_KEY=5FBAF63690`
      );
      this.summary = response.data.sm_api_content;
      console.log("executed");
      //   this.summary = "";
      //   const APIcall = await axios.get(
      //     `https://extractorapi.com/api/v1/extractor/?apikey=a720afe004a82534a9579c8b519f5f7c533a817c&url=${url}`
      //   );
      //   let response = APIcall.data.text;
      //   console.log(response);
      //   const months = [
      //     "January",
      //     "February",
      //     "March",
      //     "April",
      //     "May",
      //     "June",
      //     "July",
      //     "August",
      //     "September",
      //     "October",
      //     "November",
      //     "Dec",
      //   ];
      //   const d = new Date();
      //   let month = months[d.getMonth()];
      //   let starting_index = response.indexOf(month);
      //   console.log(response.slice(starting_index));
      //   let final_summary = await axios.get(
      //     `https://api.meaningcloud.com/summarization-1.0?key=4d916a8737e2e93a6983aa0bad0045eb&sentences=5&txt=${response.slice(
      //       starting_index
      //     )}`
      //   );
      //   console.log(final_summary);
      //   this.summary = final_summary.data.summary;
    },
    addToDos(list_item) {
      if (list_item != "") {
        if (list_item.substr(0, 1) != "•") {
          list_item = "• " + list_item;
          this.todos.push(list_item);
        }
      }
    },
    removeToDo(index) {
      this.todos.splice(index, 1);
    },
    async getPlaylist() {
      this.playlist = [];
      let response = await axios.post(
        `https://accounts.spotify.com/api/token`,
        "grant_type=client_credentials&client_id=4561619395264548af11249d01992dd8&client_secret=c5e69bebde7844fdab27eab71b7ed45c",
        {
          headers: {
            [`Content-Type`]: `application/x-www-form-urlencoded`,
          },
        }
      );
      let spotifyToken = response.data.access_token;

      //put spotify playlist ID in for the designated playlist
      let playlist = await axios.get(
        "https://api.spotify.com/v1/playlists/5pEnuurLXpPhGIPss0LZ75",
        {
          headers: {
            [`Authorization`]: `Bearer ${spotifyToken}`,
          },
        }
      );
      this.playlist = playlist.data.name;
      this.playlist_photo = playlist.data.images[0].url;
      console.log();
      console.log(playlist);

      for (let track of playlist.data.tracks.items) {
        let artists = "";
        for (let i of track.track.artists) {
          artists = artists + " " + i.name;
        }
        this.music.push({
          name: track.track.name,
          artist: artists,
        });
      }
      console.log(this.music);

      //
    },
  },
});
