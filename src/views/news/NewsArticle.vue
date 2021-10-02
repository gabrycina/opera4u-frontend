<template>
  <div v-if="loading">
    <w-flex class="pt12 pb6 px10 px5 row justify-center">
      <div
        id="post-image"
        :style="{
          background:
            'url(' + baseUrl + article.image.url + ')' + '50% 50% no-repeat',
        }"
      ></div>
    </w-flex>
    <w-flex class="column justify-center align-center">
      <h1 class="mx10">{{ article.title }}</h1>
      <p class="pt5 mx10">{{ article.body }}</p>
      <FeaturedArtists :artists="article.artists" />
    </w-flex>
  </div>
</template>

<script>
import FeaturedArtists from "../../components/FeaturedArtists/FeaturedArtists.vue";

export default {
  title: "Opera4u - News",
  name: "NewsArticle",
  props: ["id"],
  components: {
    FeaturedArtists,
  },
  data() {
    return {
      loading: false,
      article: {},
      baseUrl: "https://78.47.40.205:8787",
    };
  },
  methods: {
    async fetchArticle() {
      const res = await fetch(
        "https://78.47.40.205:8787/news-articles?id=" + this.id + "",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => response.json());

      this.article = res[0];
      console.log(this.article);
    },
  },
  async created() {
    await this.fetchArticle();
    this.loading = true;
  },
};
</script>

<style lang="scss" scoped>
#post-image {
  width: 530px;
  height: 350px;
}

h1 {
  font-size: 3rem;
}

p {
  color: #868686;
  max-width: 60vw;
  font-size: 2vw;
  @supports (display: grid) {
    @media (max-width: 40rem) {
      font-size: 5vw;
      text-align: left;
    }
  }
}
</style>
