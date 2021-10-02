<template>
  <HorizontalCard
    content-class="content"
    :image="`${baseUrl + artist.avatar.url}`"
    :image-props="imageProps"
    no-border
  >
    <w-flex class="row justify-start pl3 pt3">
      <w-flex class="column">
        <h2 class="artistName no-wrap text-left">{{ artist.name }}</h2>
        <div class="artistBio xs8 text-left">
          <p>
            {{ artist.bioEnglish }}
          </p>
        </div>
      </w-flex>
    </w-flex>
  </HorizontalCard>
</template>

<script>
import HorizontalCard from "../HorizontalCard.vue";

export default {
  name: "FeaturedArtist",
  data() {
    return {
      baseUrl: "http://localhost:8787",
      imageProps: {
        ratio: 20 / 100,
      },
    };
  },
  components: {
    HorizontalCard,
  },
  props: {
    artist: Object,
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: auto;
}

.artistName {
  font-size: 2vw;
  white-space: nowrap;
}

.artistBio {
max-width: 90vw;

  p {
    color: #868686;
    display: -webkit-box;
    max-width: inherit;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@supports (display: grid) {


  @media (max-width: 60rem) {
    .artistName {
      font-size: 4vw;
    }

    p {
      font-size: 2.5vw;
    }
  }
}
</style>
