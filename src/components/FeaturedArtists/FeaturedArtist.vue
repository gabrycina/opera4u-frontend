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
const baseAPI = process.env.VUE_APP_STRAPI_BASE_API;

export default {
  name: "FeaturedArtist",
  data() {
    return {
      baseUrl: baseAPI,
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
  font-size: 1.2vw;
  white-space: nowrap;
  font-weight: 400;
  margin-bottom: .2em;
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
    font-weight: 400;
    font-size: .8rem;
  }
}

@supports (display: grid) {
  @media (max-width: 60rem) {
    .artistName {
      font-size: 3vw;
    }

    p {
      font-size: 2.5vw;
    }
  }
}
</style>
