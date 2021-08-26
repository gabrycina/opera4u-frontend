import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import WaveUI from "wave-ui";
import "wave-ui/dist/wave-ui.css";
import "animate.css";
import titleMixin from "./mixins/titleMixin";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueSmoothScroll from "vue3-smooth-scroll";

library.add(faBars);
library.add(faChevronDown);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.config.productionTip = false;

new WaveUI(app, {});

app.mixin(titleMixin);
app.mixin({
  methods: {
    isMobileHelper: function() {
      return this.windowWidth <= 760 ? true : false;
    },
  },
});

app.use(router);
app.use(VueSmoothScroll, {
  duration: 1200,
  updateHistory: false,
});
app.mount("#app");
