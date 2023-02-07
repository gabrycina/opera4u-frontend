<template>
  <router-link :to="{ name: 'NewsArticle', params: { slug: slug } }">
    <w-card
      contentClass="content"
      :image="`${baseUrl + image}`"
      :image-props="imageProps"
      shadow
    >
      <w-flex class="column grow">
        <h1 :class="[body ? '' : 'pb4 title2']">
          <b>{{ title }}</b>
        </h1>
        <div id="preview" :class="[body ? 'spaced' : '']">
          <div>
            <p>
              {{ body }}
            </p>
          </div>
        </div>
      </w-flex>
      <div class="bottom py2">
        <w-flex class="row">
          <h3 id="artist">{{ artist }}</h3>
          <p>&nbsp; | &nbsp;{{ date }}</p>
        </w-flex>
      </div>
    </w-card>
  </router-link>
</template>

<script>
const baseAPI = process.env.VUE_APP_STRAPI_BASE_API;
export default {
  name: "NewsArticle",
  data() {
    return {
      imageProps: {
        contain: false,
        ratio: this.hasBody() ? 2 / 4 : 1 / 4,
      },
      baseUrl: baseAPI,
    };
  },
  props: {
    image: String,
    title: String,
    body: String,
    artist: String,
    date: String,
    id: Number,
    slug: String
  },
  methods: {
    hasBody() {
      return this.body != "";
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 1vw;
  text-align: left;
  justify-content: space-between;

  h1 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666666;
    font-size: 1vw;
    font-weight: 500;
    display: -webkit-box;
    max-width: inherit;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.spaced {
  padding-bottom: 2rem;
}

#artist {
  background: linear-gradient(180deg, #a6291e 0%, #640800 100%);
  transform: translate(0px, -3px);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bottom {
  position: absolute;
  bottom: 0;
  font-size: 1vw;
}

@supports (display: grid) {
  @media (max-width: 40rem) {
    .content {
      p {
        font-size: 3vw;
      }

      h1 {
        font-size: 1.2rem
      }
    }

    #artist {
      font-size: 4vw;
      transform: translate(0px, -3px);
    }
  }
}

a:-webkit-any-link {
  color: inherit;
  cursor: pointer;
}
</style>
