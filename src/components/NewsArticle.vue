<template>
    <w-card contentClass="content" :image="`${image}`" shadow>
      <w-flex class="column grow justify-end">
        <h1>{{ title }}</h1>
        <div v-if="body != ''">
          <p>
            {{ body }}
          </p>
        </div>
        <div v-else>
          <p></p>
        </div>
      </w-flex>
        <w-flex class="row">
          <h3 id="artist">{{ artist }}</h3>
          <span>{{ date }}</span>
        </w-flex>
    </w-card>
</template>

<script>
export default {
  name: "NewsArticle",
  props: {
    image: String,
    title: String,
    body: String,
    artist: String,
    date: String,
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 1vw;
  text-align: left;

  h1 {
    font-size: 2.4vw;
  }
  p {
    padding-top: 1.5vw;
    padding-bottom: 1.5vw;
    font-size: 2vw;
  }
  #artist {
    background: linear-gradient(180deg, #a6291e 0%, #640800 100%);
    font-size: 1.2vw;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    padding-left: 1vw;
    font-size: 1.2vw;
  }
}
</style>
