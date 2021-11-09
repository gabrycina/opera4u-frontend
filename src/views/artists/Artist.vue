<template>
  <w-flex class="column xs12">
    <section v-if="artist != {}" class="container">
      <w-flex :class="[isMobileHelper() ? 'column' : 'row']">
        <w-flex class="column xs12 md1 lg1 text-left">
          <div class="cardImage xs12" v-if="artist.avatar">
            <img :src="baseUrl + artist.avatar.url" />
          </div>
          <p id="copy" class="pt2 pl2 text-left">Photo by @{{ artist.avatarPhotoCopyright }}</p>
          <h3 class="gradientText pt4">Contact</h3>
          <router-link
            v-if="artist.agent"
            :to="{ name: 'Agent', params: { id: artist.agent[0].id } }"
          >
            <w-flex
              class="row contactContainer mt2 mb4 justify-space-evenly align-center"
            >
              <div class="contact ml2" v-if="artist.agent[0].avatar">
                <img
                  style="object-fit:cover;"
                  :src="baseUrl + artist.agent[0].avatar.url"
                />
              </div>
              <h1 id="contactText" class="ml2">
                {{ artist.agent[0].name }}
              </h1>
              <font-awesome-icon
                class="black mr3 ml3"
                icon="chevron-down"
                rotation="270"
              />
            </w-flex>
          </router-link>

          <w-divider class="mr12"></w-divider>
          <w-flex class="row mt2">
            <a
              v-if="artist.facebookLink"
              style="color: inherit;"
              :href="artist.facebookLink"
              target="_blank"
            >
              <font-awesome-icon class="black" :icon="['fab', 'facebook']" />
            </a>
            <a
              v-if="artist.instagramLink"
              style="color: inherit;"
              :href="artist.instagramLink"
              target="_blank"
            >
              <font-awesome-icon
                class="black ml2"
                :icon="['fab', 'instagram']"
              />
            </a>
            <a
              v-if="artist.youtubeLink"
              style="color: inherit;"
              :href="artist.youtubeLink"
              target="_blank"
            >
              <font-awesome-icon class="black ml2" :icon="['fab', 'youtube']" />
            </a>
          </w-flex>
          <p class="mt2 mb12 text">
            <a :href="'//' + artist.artistWebsite" target="_blank">{{ artist.artistWebsite }}</a>
          </p>
        </w-flex>

        <w-flex class="column xs12 md5 lg5">
          <div v-if="artist.category" class="text-left title1">
            <h1>
              {{ artist.name }}
            </h1>
            <h2 class="text">
              {{ artist.category[0].displayName }}
            </h2>
            <w-divider class="my3"></w-divider>
            <w-flex class="row justify-start mb3">
              <div
                v-if="artist.bioEnglish"
                class="button"
                :class="[
                  bioSelected == 'en' ? 'button__active' : 'button__inactive',
                ]"
                @click="changeActiveBio('en')"
              >
                EN
              </div>
              <div
                v-if="artist.bioGerman"
                class="button ml3"
                :class="[
                  bioSelected == 'de' ? 'button__active' : 'button__inactive',
                ]"
                @click="changeActiveBio('de')"
              >
                DE
              </div>
              <div
                v-if="artist.bioItalian"
                class="button ml3"
                :class="[
                  bioSelected == 'it' ? 'button__active' : 'button__inactive',
                ]"
                @click="changeActiveBio('it')"
              >
                IT
              </div>
            </w-flex>
            <read-more
              class="text"
              :text="bio"
              less-str="read less"
              :max-chars="380"
            ></read-more>
          </div>
        </w-flex>
      </w-flex>
    </section>
    <section v-if="artist.gallery.length != 0" class="container">
      <h1 class="pt10 pb3 text-left ole" style="font-weight: 300;">
        <b>
          Gallery
        </b>
      </h1>
      <w-divider></w-divider>
      <w-flex class="column mt10 carousel">
        <div :key="reload">
          <vue-carousel :data="data" indicator-type="disc"></vue-carousel>
        </div>
      </w-flex>
    </section>
    <section v-if="artist.news_articles.length != 0"  class="container">
      <h1 class="pt10 pb3 text-left ole" style="font-weight: 300;">
        <b> News on {{ artist.name }} </b>
      </h1>
      <w-divider></w-divider>
      <w-flex class="column mt10">
        <vue-horizontal responsive>
          <section
            class="lg6 md6 xs12"
            v-for="news in artist.news_articles"
            :key="news"
          >
            <router-link :to="{ name: 'NewsArticle', params: { id: news.id } }">
              <HorizontalCard
                :image="`${baseUrl + news.image.url}`"
                :image-props="imageProps"
                no-border
              >
                <w-flex class="pl5 row justify-start">
                  <w-flex class="column">
                    <h2 class="newsTitle text-left">
                      {{ news.title }}
                    </h2>
                    <div class="xs8 text-left newsBody">
                      <p>
                        {{ news.body }}
                      </p>
                    </div>
                  </w-flex>
                </w-flex>
              </HorizontalCard>
            </router-link>
          </section>
        </vue-horizontal>
      </w-flex>
    </section>
    <section v-if="artist.presses.length != 0" class="container">
      <h1 class="pt10 pb3 text-left ole" style="font-weight: 300;">
        <b>
          Press
        </b>
      </h1>
      <w-divider></w-divider>
      <w-flex class="column mt10" style="margin-left: 15vw; margin-right: 15vw">
        <div :key="reload">
          <vue-carousel :data="press" indicator-type="disc"></vue-carousel>
        </div>
      </w-flex>
    </section>
    <section v-if="artist.discographies.length != 0" class="container">
      <h1 class="pt10 pb3 text-left ole" style="font-weight: 300;">
        <b>
          Disography
        </b>
      </h1>
      <w-divider></w-divider>
      <w-flex class="column mt10">
        <div v-if="artist.discographies">
          <section
            class="lg3 md3 xs12 px5"
            v-for="disc in artist.discographies"
            :key="disc"
          >
            <a>
              <w-flex class="column align-center">
                <div class="cardImage xs12 text-center">
                  <img :src="baseUrl + disc.diskImage.url" />
                  <p class="gradientText pt4">
                    {{ disc.label }}
                  </p>
                </div>
              </w-flex>
            </a>
          </section>
        </div>
      </w-flex>
    </section>
  </w-flex>
</template>

<script>
import VueHorizontal from "vue-horizontal";
import HorizontalCard from "../../components/HorizontalCard.vue";
import ReadMore from "../../components/ReadMore.vue"
const baseAPI = process.env.VUE_APP_STRAPI_BASE_API;

export default {
  name: "Artist",
  props: ["id"],
  data() {
    return {
      artist: {},
      baseUrl: baseAPI,
      bio: "",
      bioSelected: "en",
      data: [],
      press: [],
      reload: 0,
      imageProps: {
        ratio: 30 / 100,
      },
      windowWidth: window.innerWidth,
    };
  },
  components: {
    VueHorizontal,
    HorizontalCard,
    ReadMore
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },

    changeActiveBio(nextActive) {
      this.bioSelected = nextActive;
      if (this.bioSelected == "en") this.bio = this.artist.bioEnglish;
      else if (this.bioSelected == "it") this.bio = this.artist.bioItalian;
      else this.bio = this.artist.bioGerman;
    },

    async fetchArtist() {
      const res = await fetch(
        `${baseAPI}/artists?id=` + this.id + "",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => response.json());

      this.artist = res[0];
      this.bio = this.artist.bioEnglish;
      for (var i = 0; i < this.artist.gallery.length; i++) {
        this.data.push(
          `<div class='carousel__item'><img style='width: 100%; height: 100%;' class='carousel__image' src='${this
            .baseUrl + this.artist.gallery[i].url}' alt='' /></div>`
        );
      }

      for (var j = 0; j < this.artist.presses.length; j++) {
        this.press.push(
          `<w-flex class='column justify-center'><a style='color: inherit;' href='//${this.artist.presses[j].articleLink}' target='_blank'><i>${this.artist.presses[j].quoteFromReview}</i></a><p class='pt3'><b>${this.artist.presses[j].author}</b></p></w-flex>`
        );
      }

      this.reload++;
      console.log(this.data);
      console.log(this.artist);
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  async created() {
    await this.fetchArtist();
    this.changeActiveBio("en");
  },
};
</script>
<style lang="scss" scoped>
$shadow: rgba(0, 0, 0, 0.2);
$white: #fff;

.container {
  margin-left: 20vw;
  margin-right: 20vw;
  margin-top: 3vw;
  @supports (display: grid) {
    @media (max-width: 40rem) {
      margin-left: 10vw;
      margin-right: 10vw;
      margin-top: 6vw;
    }
  }
}

.cardImage {
  height: 13em;
  width: 13em;
  border-radius: 2em;
  box-shadow: 0 0.1875rem 0.8rem $shadow;
  text-align: center;
}

.contact {
  height: 1.2em;
  width: 1.2em;
  box-shadow: 0 0.1875rem 0.8rem $shadow;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: black;
  font: 15px/1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $white;
  border: none;
  outline: none;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.contactContainer {
  box-shadow: 0 0.1rem 0.5rem $shadow;
  height: 2.5em;
  max-width: 12em;
  border-radius: 0.5em;
  text-align: center;

  h1 {
    font-size: 1.2vw;
  }
}

#copy {
  color: #868686;
  font-size: 0.8vw;
  @supports (display: grid) {
    @media (max-width: 40rem) {
      font-size: 3.8vw;
    }
  }
}

#contactText {
  font-size: 0.9vw;
  @supports (display: grid) {
    @media (max-width: 40rem) {
      font-size: 3.8vw;
    }
  }
}

h3 {
  @supports (display: grid) {
    @media (max-width: 40rem) {
      font-size: 3.8vw;
    }
  }
}

.text {
  color: #868686;
  font-size: 1.4vw;
  font-weight: 300;
  @supports (display: grid) {
    @media (max-width: 40rem) {
      font-size: 5vw;
    }
  }
}

.carousel {
  margin-left: 15vw;
  margin-right: 15vw;
  @supports (display: grid) {
    @media (max-width: 40rem) {
      margin-left: 5vw;
      margin-right: 5vw;
    }
  }
}

.gradientText {
  background: linear-gradient(180deg, #a6291e 0%, #640800 100%);
  font-size: 1vw;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @supports (display: grid) {
    @media (max-width: 40rem) {
      font-size: 5vw;
    }
  }
}

img {
  border-radius: 0.5em;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

a:-webkit-any-link {
  color: inherit;
  cursor: pointer;
}

.carousel__item {
  width: 60%;
  height: 100px;
}

.carousel__image {
  width: 100%;
  height: 100%;
}

.newsTitle {
  font-size: 1.5vw;
  @supports (display: grid) {
    @media (max-width: 40rem) {
      font-size: 5vw;
    }
  }
}

.newsBody {
  max-width: 90vw;

  p {
    color: #868686;
    display: -webkit-box;
    max-width: inherit;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    @supports (display: grid) {
      @media (max-width: 40rem) {
        font-size: 4vw;
      }
    }
  }
}

@supports (display: grid) {
  @media (max-width: 60rem) {
    .artistName {
      font-size: 4vw;
    }

    p {
      font-size: 2.5vw;
    }
  }
}

.button {
  text-align: center;
  font-size: 1.2vw;
  width: 6vw;
  height: 1.5vw;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  font-weight: 400;

  &__active {
    background: linear-gradient(180deg, #a6291e 0%, #640800 100%);
    color: white;
  }

  &__inactive {
    background-color: white;
    color: black;
  }

  @supports (display: grid) {
    @media (max-width: 40rem) {
      width: 20vw;
      height: 6vw;
      font-size: 5vw;
    }
  }
}
</style>
