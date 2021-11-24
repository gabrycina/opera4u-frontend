<template>
  <HorizontalCard
    content-class="content"
    :image="`${baseUrl + news.image.url}`"
    :image-props="imageProps"
    no-border
  >
    <w-flex class="row justify-start pl3 pt3">
      <w-flex class="column">
        <h2 class="newsTitle no-wrap text-left">{{ news.title }}</h2>
      </w-flex>
    </w-flex>
  </HorizontalCard>
</template>

<script>
import HorizontalCard from "../HorizontalCard.vue";

const baseAPI = process.env.VUE_APP_STRAPI_BASE_API;
export default {
  name: "NewsOnCard",
  data() {
    return {
      baseUrl: baseAPI,
      imageProps: {
        ratio: 20 / 100,
      },
    };
  },
  props: {
    news: Object,
  },
  components: {
    HorizontalCard,
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: auto;
}

.newsTitle {
  font-size: 1.5vw;
  font-weight: 400;
  margin-bottom: 0.2em;
}

@supports (display: grid) {
  @media (max-width: 60rem) {
    .newsTitle {
      font-size: 3vw;
    }

    p {
      font-size: 2.5vw;
    }
  }
}
</style>
