<template name="Footer">
  <footer class="pt10" id="footer">
    <w-flex class="row justify-center pb2">
      <img :src="Logo" alt="" />
    </w-flex>

    <div v-if="!isMobileHelper()">
      <w-flex class="pt5 row shrink justify-space-evenly">
        <Info
          title="Address"
          info="Josefstädter Straße 30/2 A-1080 Vienna"
          link="https://goo.gl/maps/eDX5hYUjXuZGqU3T6"
        />

        <router-link :to="{ name: 'Imprint' }">
          <div>
            <w-flex class="column pa5 no-shrink align-center">
              <h4>Imprint</h4>
              <p class="underlined">
                Click to read
              </p>
            </w-flex>
          </div>
        </router-link>

        <Info
          title="Email for contacts"
          info="agency@opera4u.com"
          link="mailto:agency@opera4u.com"
        />
        <Info title="Telephone" info="T: +43 1 513 75 92" link="" />
      </w-flex>
    </div>
    <div v-else>
      <w-flex class="pt5 column shrink align-center">
        <Info
          title="Address"
          info="Josefstädter Straße 30/2 A-1080 Vienna"
          link="https://goo.gl/maps/eDX5hYUjXuZGqU3T6"
        />

        <router-link :to="{ name: 'Imprint' }">
          <div>
            <w-flex class="column pa5 no-shrink align-center">
              <h4>Imprint</h4>
              <p class="underlined">
                Click to read
              </p>
            </w-flex>
          </div>
        </router-link>

        <Info
          title="Email for contacts"
          info="agency@opera4u.com"
          link="mailto:agency@opera4u.com"
        />
        <Info title="Telephone" info="T: +43 1 513 75 92" link="" />
      </w-flex>
    </div>
    <w-flex class="row shrink pt10 justify-center">
      <p>@ 2021 Copyright Opera4u.com</p>
    </w-flex>

    <w-flex class="row shrink py5 justify-center">
      <a
        style="color: inherit;"
        href="https://www.facebook.com/Opera4u-167298469948371/"
        target="_blank"
      >
        <font-awesome-icon class="black" :icon="['fab', 'facebook']" />
      </a>
    </w-flex>
  </footer>
</template>

<script>
import Logo from "@/assets/logo.svg";
import Info from "./Info.vue";

export default {
  name: "Footer",
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  components: {
    Info,
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  setup() {
    return {
      Logo,
    };
  },
};
</script>


<style scoped>
#footer {
  font-family: 'Roboto';
}

h4 {
    background: linear-gradient(180deg, #A6291E 0%, #640800 100%);
    font-size: 1vw;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.underlined {
    text-decoration: underline;
        color: #868686;
    padding-top: .5em;
    font-size: 1vw;
}

@media(max-width: 40rem){
    h4 {
        font-size: 5vw;
    }

    .underlined {
      font-size: 3vw;
    }
}
</style>