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
    <h1 class="mx10">{{ article.title }}</h1>
    <p class="pt5 mx10">{{ article.body }}</p>
    <FeaturedArtists :artists="article.artists"/>
  </div>
</template>

<script>
import FeaturedArtists from '../../components/FeaturedArtists/FeaturedArtists.vue'

export default {
  title: "Opera4u - News",
  name: "NewsArticle",
  props: ["id"],
  components: {
    FeaturedArtists
  },
  data() {
    return {
      loading: false,
      article: {},
      baseUrl: "http://localhost:1337",
    };
  },
  methods: {
    async fetchArticle() {
      const res = await fetch(
        "http://localhost:1337/news-articles?id=" + this.id + "",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => response.json());

      this.article = res[0];
      console.log(this.article)
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
  max-width: inherit;
  font-size: 1.5rem;
}
</style>
