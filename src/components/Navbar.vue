<template>
  <div>
    <div class="container pt3 xs7 justify-end" >
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
              About
            </router-link>
          </transition>
        </w-flex>
      </div>
    </div>
    <img class="corner pa0 ma0 xs4" src="@/assets/corner-mask.png" alt="Opera4u Logo" />
  </div>
</template>

<script>
import NavBg from "@/assets/nav-bg.svg";

export default {
  name: "Navbar",
  data() {
    return {
      active: "/",
    };
  },
  methods: {
    changeActiveRoute(val) {
      this.active = val;
    },
    isActive(val) {
      return this.active == val;
    }
  },
  setup() {
    return {
      NavBg,
    };
  },
};
</script>

<style>
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
