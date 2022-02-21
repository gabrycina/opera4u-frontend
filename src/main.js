import { createApp } from "vue/dist/vue.esm-bundler";
import App from "./App.vue";
import router from "./router";
import WaveUI from "wave-ui";
import "wave-ui/dist/wave-ui.css";
import "animate.css";
import titleMixin from "./mixins/titleMixin";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/fontawesome-free-brands";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import ReadMore from "vue-read-more";
import VueCarousel from "@chenfengyuan/vue-carousel";
import { marked } from "marked";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueSmoothScroll from "vue3-smooth-scroll";

library.add(faBars);
library.add(faChevronDown);
library.add(faFacebookSquare);
library.add(faInstagram);
library.add(faEnvelope);

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
    md: function(input) {
      input = input.replace(/\r\n|\r/g, '\n')
                    .replace(/\t/g, '    ')
                    .replace(/^[\w<][^\n]*\n+/mg,function(m){
                      return /\n{2}/.test(m) ? m : m.replace(/\s+$/,"")+"  \n";
                    });
      
      var mark = marked.parse(input)
      return mark;
    },
  },
});

app.component(VueCarousel.name, VueCarousel);
app.use(ReadMore);
app.use(router);
app.use(VueSmoothScroll, {
  duration: 1200,
  updateHistory: false,
});
app.mount("#app");
