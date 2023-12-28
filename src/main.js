import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).mount("#app");

// App.use(VueGoogleApi, {
//   clientId:
//     "169115428721-2ggudhj958t4b6kl8ek0n15qui72ee81.apps.googleusercontent.com",
//   apiKey: "AIzaSyDW7MeutjWPblVV1Mis0bicplRU0lRzs2U",
//   scope: "https://www.googleapis.com/auth/calendar.readonly",
// });

//script to set up (mount) the app.
//where we do our imports.
