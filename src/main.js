import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faForward,
  faBackward,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(faForward, faBackward, faArrowLeft);
//add commas to add multiple

createApp(App)
  .use(router)
  .use(createPinia())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

// App.use(VueGoogleApi, {
//   clientId:
//     "169115428721-2ggudhj958t4b6kl8ek0n15qui72ee81.apps.googleusercontent.com",
//   apiKey: "AIzaSyDW7MeutjWPblVV1Mis0bicplRU0lRzs2U",
//   scope: "https://www.googleapis.com/auth/calendar.readonly",
// });

//script to set up (mount) the app.
//where we do our imports.
