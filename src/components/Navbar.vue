<template>
  <div class="container pt3 xs7 justify-end">
    <img class="pa0 ma0 xs12" :src="NavBg" alt="Opera4u Logo" />
    <router-link to="/">
      <div class="logo xs2"></div>
    </router-link>
    <div class="options pt4 xs9">
      <w-flex class="row justify-space-evenly">
        <router-link class="item black" to="/artists">Artists</router-link>
        <router-link class="item black" to="/news">News </router-link>
        <router-link class="item black" to="/about">About</router-link>
      </w-flex>
    </div>
  </div>
</template>

<script>
import NavBg from "@/assets/nav-bg.svg";

export default {
  name: "Navbar",
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
</style>
