<template>
  <div class="divider">
    <h1 class="pt10 pb4 text-left ole"><b>Featured Artists</b></h1>
    <w-divider></w-divider>
    <vue-horizontal responsive>
      <section class="lg6 md6 xs12 py5 pl10" v-for="artist in artists" :key="artist.name">
        <FeaturedArtist :artist="artist" />
      </section>
    </vue-horizontal>
  </div>
</template>

<script>
import VueHorizontal from "vue-horizontal";
import FeaturedArtist from "../components/FeaturedArtist.vue";

export default {
  name: "FeaturedArtists",
  props: {
    artists: Array,
  },
  components: {
    VueHorizontal,
    FeaturedArtist,
  },
};
</script>

<style lang="scss">
h1 {
  font-size: 1.2rem;
}



</style>
