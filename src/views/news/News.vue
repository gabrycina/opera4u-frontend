<template>
  <div class="about">
    <h1>This is news page</h1>
    <input type="text" v-model="search" placeholder="search news">
    <div :key="newsArticle.id" v-for="newsArticle in filteredNews">
      <router-link :to="{ name: 'NewsArticle', params: { id: newsArticle.id } }">
        {{ newsArticle.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Operaa4u - News',
  data(){
    return {
      news: [],
      search: ''
    }
  },
  methods: {
    async fetchNews(){
      const res = await fetch("http://localhost:1337/news-articles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json())

      res.sort((a, b) => { return new Date(b.date) - new Date(a.date)})

      this.news = res
      console.log(this.news)
    },
  },
  created(){
    this.fetchNews()
  },
  computed: {
    filteredNews: function(){
      return this.news.filter((newsArticle) => {
        return newsArticle.title.match(this.search)
      })
    }
  }
}
</script>