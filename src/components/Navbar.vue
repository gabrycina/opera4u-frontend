<template name="Navbar">
  <div v-if="!isMobile()">
    <div class="container pt3 xs7 justify-end">
      <img id="svg" class="pa0 ma0 xs12" :src="NavBg" alt="Opera4u Logo" />
      <router-link v-on:click="changeActiveRoute('/')" to="/">
        <div class="logo xs2"></div>
      </router-link>
      <div class="options pt4 xs9">
        <w-flex class="row justify-space-evenly">
          <transition>
            <router-link
              v-on:click="changeActiveRoute('/artists')"
              v-bind:class="{
                active: isActive('/artists'),
                disabled: !isActive('/artists'),
              }"
              class="item"
              to="/artists"
            >
              Artists
            </router-link>
          </transition>
          <transition>
            <router-link
              v-on:click="changeActiveRoute('/news')"
              v-bind:class="{
                active: isActive('/news'),
                disabled: !isActive('/news'),
              }"
              class="item"
              to="/news"
            >
              News
            </router-link>
          </transition>
          <transition>
            <router-link
              v-on:click="changeActiveRoute('/about')"
              v-bind:class="{
                active: isActive('/about'),
                disabled: !isActive('/about'),
              }"
              class="item"
              to="/about"
            >
              About Us
            </router-link>
          </transition>
        </w-flex>
      </div>
    </div>
    <img
      class="corner pa0 ma0 xs4"
      src="@/assets/corner-mask.png"
      alt="Opera4u Logo"
    />
  </div>

  <div v-else>
    <w-flex class="row justify-space-between">
      <img class="pt5 pl5" :src="Logo" alt="" />

      <w-button
        class="pr5"
        @click="showDrawer = !showDrawer"
        text
        color="primary"
      >
        <font-awesome-icon class="black" icon="bars" size="xxl" />
      </w-button>
    </w-flex>

    <w-drawer bg-color="steelblue" v-model="showDrawer" :right="true" @close="showDrawer = false">
      <w-button
        class="button--close"
        @click="showDrawer = false"
        sm
        outline
        round
        absolute
        color="black"
        icon="wi-cross"
      >
      </w-button>
      <w-flex class="column align-center justify-center">
        <transition>
          <router-link
            v-on:click="changeActiveRoute('/')"
            v-bind:class="{
              active: isActive('/'),
              disabled: !isActive('/'),
            }"
            class="itemDrawer"
            to="/"
          >
            Home
          </router-link>
        </transition>
        <transition>
          <router-link
            v-on:click="changeActiveRoute('/artists')"
            v-bind:class="{
              active: isActive('/artists'),
              disabled: !isActive('/artists'),
            }"
            class="itemDrawer"
            to="/artists"
          >
            Artists
          </router-link>
        </transition>
        <transition>
          <router-link
            v-on:click="changeActiveRoute('/news')"
            v-bind:class="{
              active: isActive('/news'),
              disabled: !isActive('/news'),
            }"
            class="itemDrawer"
            to="/news"
          >
            News
          </router-link>
        </transition>
        <transition>
          <router-link
            v-on:click="changeActiveRoute('/about')"
            v-bind:class="{
              active: isActive('/about'),
              disabled: !isActive('/about'),
            }"
            class="itemDrawer"
            to="/about"
          >
            About Us
          </router-link>
        </transition>
      </w-flex>
    </w-drawer>
  </div>
</template>

<script>
import NavBg from "@/assets/nav-bg.svg";
import Logo from "@/assets/logo.svg";

export default {
  name: "Navbar",
  data() {
    return {
      active: "/",
      showDrawer: false,
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  methods: {
    changeActiveRoute(val) {
      this.active = val;
      this.showDrawer = false;
    },
    isActive(val) {
      return this.active == val;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    isMobile() {
      return this.windowWidth <= 760 ? true : false;
    },
  },
  setup() {
    return {
      NavBg,
      Logo,
    };
  },
};
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
  display: flex;
  align-content: flex-end;
}

.logo {
  position: absolute;
  left: 5%;
  height: 5vh;
}

.options {
  position: absolute;
  top: 0;
  height: 4vh;
  width: 60vw;
}

.item {
  position: relative;
  font-size: 1.5vw;
}

.itemDrawer {
  position: relative;
  font-size: 10vw;
  padding: 1rem;
}

.active {
  color: #770a00;
  animation: pulse 1s infinite;
}

.disabled {
  color: black;
}

.corner {
  position: absolute;
  right: 0;
  top: 0;
  right: 0;
  margin: auto;
  text-align: center;
}
</style>
