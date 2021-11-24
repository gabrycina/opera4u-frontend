<template>
  <div v-if="loading">
    <w-flex class="pt12 pb6 px10 px5 row justify-center">
      <img class="post-image" :src="`${baseUrl + article.image.url}`" />
    </w-flex>
    <w-flex class="column justify-center align-center">
      <h1 class="mx10">{{ article.title }}</h1>
      <p class="pt5" style="text-align: justify" v-html="markdownToHtml"></p>
      <FeaturedArtists :artists="article.artists" />
    </w-flex>
  </div>
</template>

<script>
import FeaturedArtists from "../../components/FeaturedArtists/FeaturedArtists.vue";
const baseAPI = process.env.VUE_APP_STRAPI_BASE_API;
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
      baseUrl: process.env.VUE_APP_STRAPI_BASE_API,
    };
  },
  methods: {
    async fetchArticle() {
      const res = await fetch(
        `${baseAPI}/news-articles?id=` + this.id + "",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => response.json());

      this.article = res[0];
    },
  },
  async created() {
    await this.fetchArticle();
    this.loading = true;
  },
  computed: {
    markdownToHtml() {
      return this.md(this.article.body);
    },
  },
};
</script>

<style lang="scss" scoped>
.post-image {
  width: 50vw;
  object-fit: cover;
  object-position: center;
  padding-bottom: 2rem;
  @supports(display: grid){
    @media(max-width: 40rem){
      width: 80vw;
    }
  }
}

h1 {
  font-size: 2vw;
  max-width: 40vw;
  text-align: left;
  @supports(display: grid){
    @media(max-width: 40rem){
      max-width: 80vw;
      font-size: 7vw;
    }
  }
}

p {
  color: #868686;
  max-width: 40vw;
  font-size: 1vw;
  @supports (display: grid) {
    @media (max-width: 40rem) {
      max-width: 80vw;
      font-size: 5vw;
      text-align: left;
    }
  }
}
</style>
