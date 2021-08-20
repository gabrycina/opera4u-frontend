<template>
  <div class="about">
    <h1>News</h1>
    <w-input
      class="mb5 input"
      color="black"
      label="Search by title"
      round
      shadow
      v-model="search"
    >
    </w-input>
    <div :key="newsArticle.id" v-for="newsArticle in filteredNews">
      <router-link
        :to="{ name: 'NewsArticle', params: { id: newsArticle.id } }"
      >
        <w-card content-class="content">
          <w-flex class="row justify-start">
            <w-image
              class="mr2"
              :src="`${baseUrl + newsArticle.image.url}`"
              lazy
            ></w-image>
            <w-flex class="column">
              <h2 class="newsTitle no-wrap text-left">
                {{ newsArticle.title }}
              </h2>
              <div class="artistBio xs8 text-left">
                <p style="font-size: 1vw">
                  {{ newsArticle.body }}
                </p>
              </div>
            </w-flex>
          </w-flex>
        </w-card>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  title: "Operaa4u - News",
  name: "News",
  data() {
    return {
      news: [],
      search: "",
      baseUrl: "http://localhost:1337",
    };
  },
  methods: {
    async fetchNews() {
      const res = await fetch("http://localhost:1337/news-articles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      res.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      this.news = res;
      console.log(this.news);
    },
    str_limit(value, size) {
      if (!value) return "";
      value = value.toString();

      if (value.length <= size) {
        return value;
      }
      return value.substr(0, size) + "...";
    },
  },
  created() {
    this.fetchNews();
  },
  computed: {
    filteredNews: function() {
      return this.news.filter((newsArticle) => {
        return newsArticle.title.match(this.search);
      });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 3vw;
  padding-top: 3vw;
}

.input {
  margin-left: 30vw;
  margin-right: 30vw;
  color: black;
}

.newsTitle {
  font-size: 2vw;
  white-space: nowrap;
}
</style>
