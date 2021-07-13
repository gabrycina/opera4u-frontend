<template>
  <h1>{{ article.title }}</h1>
</template>

<script>
export default {
  name: "NewsArticle",
  props: ["id"],
  data() {
    return {
      article: {},
      recentNews: [],
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
      console.log(this.article);
      console.log(res);
    },

    async fetchRecentNews() {
      const NUMBER_OF_NEWS = 5;

      //Making GET request for news
      const res = await fetch("http://localhost:1337/news-articles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      //Sorting the array in descending order
      res.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

      //Taking the first 5 news with homepage flag === true
      var i = 0;
      while (i < NUMBER_OF_NEWS) {
        var obj = res.pop();
        if (obj === undefined) break;
        this.recentNews.push(obj);
        i++;
      }

      //Debug print
      console.log("Objets of (max 5) most recent news");
      console.log(this.recentNews);
    },
  },
  created() {
    this.fetchArticle()
    this.fetchRecentNews()
  },
};
</script>
