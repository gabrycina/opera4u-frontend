<template>
  <HorizontalCard content-class="content" :image="`${baseUrl + artist.avatar.url}`" no-border>
    <w-flex class="row justify-start">
      <w-flex class="column">
        <h2 class="artistName no-wrap text-left">{{ artist.name }}</h2>
        <div class="artistBio xs8 text-left">
          <p style="font-size: 1vw">{{ this.str_limit(artist.bioEnglish, 80)}}</p>
        </div>
      </w-flex>
    </w-flex>
  </HorizontalCard>
</template>

<script>
import HorizontalCard from './HorizontalCard.vue'

export default {
  name: "FeaturedArtist",
  data() {
    return {
      baseUrl: "http://localhost:1337",
    };
  },
  components: {
    HorizontalCard
  },
  methods: {
    str_limit(value, size) {
      if (!value) return "";
      value = value.toString();

      if (value.length <= size) {
        return value;
      }
      return value.substr(0, size) + "...";
    },
  },
  props: {
    artist: Object,
  },
};
</script>

<style lang="scss">
.artistName {
  font-size: 2vw;
  white-space: nowrap;
}
</style>
