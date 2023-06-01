import { createApp } from "vue";
import router from "./router/index";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import firebase from "./firebase";

loadFonts();

createApp(App).use(vuetify).use(router).use(firebase).mount("#app");
