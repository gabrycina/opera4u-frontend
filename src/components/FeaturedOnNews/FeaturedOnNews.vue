<template>
  <div>
    <h1 class="pt10 text-left ole">
      <b>News on {{ artist.name }}</b>
    </h1>
    <w-divider></w-divider>
    <vue-horizontal responsive>
      <section
        class="lg6 md6 xs12 py5 pl10"
        v-for="news in artist.news_articles"
        :key="news.title"
      >
        <router-link :to="{ name: 'NewsArticle', params: { id: news.id } }">
          <NewsOnCard :news="news" />
        </router-link>
      </section>
    </vue-horizontal>
  </div>
</template>

<script>
import VueHorizontal from "vue-horizontal";
import NewsOnCard from "./NewsOnCard.vue";

export default {
  name: "FeaturedOnNews",
  props: {
    artist: Object,
  },
  components: {
    VueHorizontal,
    NewsOnCard,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.5rem;
  padding-bottom: 1rem;
}

a:-webkit-any-link {
  color: inherit;
  cursor: pointer;
}
</style>
