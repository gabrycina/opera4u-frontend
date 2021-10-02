<template>
  <router-link :to="{ name: 'NewsArticle', params: { id: id } }">
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
export default {
  name: "NewsArticle",
  data() {
    return {
      imageProps: {
        contain: false,
        ratio: this.hasBody() ? 2 / 4 : 1 / 4,
      },
      baseUrl: "http://78.47.40.205:8787",
    };
  },
  props: {
    image: String,
    title: String,
    body: String,
    artist: String,
    date: String,
    id: Number,
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
    margin-bottom: 1rem;
  }

  p {
    color: #868686;
    font-size: 1.4vw;
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
        font-size: 4vw;
      }
    }

    #artist {
      font-size: 4vw;
    }
  }
}

a:-webkit-any-link {
  color: inherit;
  cursor: pointer;
}
</style>
