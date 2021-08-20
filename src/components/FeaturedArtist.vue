<template>
  <w-card content-class="content" no-border>
    <w-flex class="row justify-start">
      <w-image
        class="mr4"
        :src="`${baseUrl + artist.avatar.url}`"
        width="8em"
        height="6em"
        lazy
      ></w-image>
      <w-flex class="column">
        <h2 class="artistName no-wrap text-left">{{ artist.name }}</h2>
        <div class="artistBio xs8 text-left">
          <p style="font-size: 1vw">{{ this.str_limit(artist.bioEnglish, 80)}}</p>
        </div>
      </w-flex>
    </w-flex>
  </w-card>
</template>

<script>
export default {
  name: "FeaturedArtist",
  data() {
    return {
      baseUrl: "http://localhost:1337",
    };
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
.artistBio {
}

.artistName {
  font-size: 2vw;
  white-space: nowrap;
}
</style>
