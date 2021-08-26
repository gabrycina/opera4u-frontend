<template name="Footer">
  <footer class="pt10">
    <w-flex class="row justify-center pb2">
      <img :src="Logo" alt="" />
    </w-flex>

    <div v-if="!isMobileHelper()">
      <w-flex class="pt5 row shrink justify-space-evenly">
        <Info
          title="Address"
          info="Josefstädter Straße 30/2 A-1080 Vienna"
          link=""
        />

        <Info
          title="Impressum"
          info="Click here to read"
          link="http://opera4u.com"
        />

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
          link=""
        />

        <Info
          title="Impressum"
          info="Click here to read"
          link="http://opera4u.com"
        />

        <Info
          title="Email for contacts"
          info="agency@opera4u.com"
          link="mailto:agency@opera4u.com"
        />
        <Info title="Telephone" info="T: +43 1 513 75 92" link="" />
      </w-flex>
    </div>
    <w-flex class="row shrink pa10 justify-center">
      <p>@ 2021 Copyright Opera4u.com</p>
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
