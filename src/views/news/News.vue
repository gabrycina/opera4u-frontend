<template>
  <div>
    <h1 style="font-weight: 300;">News</h1>
    <input class="input" placeholder="Search by title" v-model="search" />
    <w-flex class="column pt10 align-center">
      <div :key="newsArticle.id" v-for="newsArticle in filteredNews">
        <router-link
          :to="{ name: 'NewsArticle', params: { id: newsArticle.id } }"
        >
          <div class="container">
            <a class="card-link" href="#">
              <article class="blog-card">
                <img
                  class="post-image"
                  :src="`${baseUrl + newsArticle.image.url}`"
                />
                <div class="article-details">
                  <h3 class="post-title">{{ newsArticle.title }}</h3>
                  <p class="post-description">
                    {{ newsArticle.body }}
                  </p>
                </div>
              </article>
            </a>
          </div>
        </router-link>
      </div>
    </w-flex>
  </div>
</template>

<script>
 const baseAPI = process.env.VUE_APP_STRAPI_BASE_API;
export default {
  title: "Opera4u - News",
  name: "News",
  data() {
    return {
      news: [],
      search: "",
      baseUrl: process.env.VUE_APP_STRAPI_BASE_API,
      imageProps: {
        lazy: true,
        ratio: 15 / 20,
      },
    };
  },
  methods: {
    async fetchNews() {
      const res = await fetch(`${baseAPI}/news-articles`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      res.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      this.news = res;
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

<style lang="scss" scoped>
$bg: #eedfcc;
$text: #868686;
$black: #121212;
$white: #fff;
$red: #770a00;
$border: #ebebeb;
$shadow: rgba(0, 0, 0, 0.2);

@mixin transition($args...) {
  transition: $args;
}

.container {
  width: 60vw;
  height: 13.625rem;
}

.blog-card {
  display: flex;
  flex-direction: row;
  text-align: left;
  background: $white;
  box-shadow: 0 0.1875rem 0.8rem $shadow;
  border-radius: 0.375rem;
  overflow: hidden;
  height: 20vh;
}

.card-link {
  position: relative;
  display: block;
  color: $text;
  text-decoration: none;
  &:hover .post-title {
    @include transition(color 0.3s ease);
    color: $red;
  }
  &:hover .post-image {
    @include transition(opacity 0.3s ease);
    opacity: 0.9;
  }
}

.post-image {
  @include transition(opacity 0.3s ease);
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.article-details {
  padding: 1.5rem;
}

.post-title {
  display: -webkit-box;
  max-width: inherit;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @include transition(color 0.3s ease);
  font-size: 1.125rem;
  line-height: 1.4;
  color: $black;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.post-description {
  display: -webkit-box;
  max-width: inherit;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 40rem) {
  .container {
    width: 90vw;
    height: 27.25rem;
    margin: 2rem;
  }

  .blog-card {
    flex-wrap: wrap;
  }
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }

  .container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }

  .post-image {
    height: 100%;
  }

  .blog-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 40rem) {
    .post-title {
      font-size: 1.5rem;
    }

    .blog-card {
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
      height: 55vh;
    }

    .post-description {
      font-size: 6vw;
    }

    .article-details {
      width: 90vw;
    }
  }
}

h1 {
  font-size: 4vw;
  padding-top: 3vw;
  padding-bottom: 1vw;
  @media (max-width: 40rem) {
    font-size: 15vw;
  }
}

.input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #868686;
  font: 15px/1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  max-width: 50vw;
  background-color: $white;
  border: none;
  padding: 10px 11px 11px 11px;
  border-radius: 100000000px;
  box-shadow: 0 0.1875rem 0.8rem $shadow;
  outline: none;
  margin: 0;
  box-sizing: border-box;

  @supports (display: grid) {
    @media (max-width: 40rem) {
      margin-top: 1rem;
      max-width: 80vw;
    }
  }
}
</style>
