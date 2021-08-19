<template>
  <div class="home">
    <h1>We manage artists</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  title: 'Opera4u - Artist Management',
  name: "Home",
  methods: {
    async fetchRecentNews() {
      const NUMBER_OF_NEWS = 5

      //Making GET request for news
      const res = await fetch("http://localhost:1337/news-articles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json())

      //Sorting the array in descending order
      res.sort((a, b) => { return new Date(a.date) - new Date(b.date)})

      //Taking the first 5 news with homepage flag === true
      var i = 0
      while(i < NUMBER_OF_NEWS){
        var obj = res.pop()
        if(obj === undefined) break
        if(obj.homepage){
          this.recentNews.push(obj)
          i++
        }
      }


      //Debug print
      console.log("Objets of (max 5) most recent news")
      console.log(this.recentNews)
    },

  },
  data(){
    return {
        recentNews: []
    }
  },
  created() {
    this.fetchRecentNews();
  },
};
</script>
