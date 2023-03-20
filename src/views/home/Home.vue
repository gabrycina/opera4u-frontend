<template>
  <div class="home">
    <w-flex
      wrap
      class="hero justify-center"
      :class="[isMobileHelper() ? 'column' : 'row']"
    >
      <!-- TODO Change with carousel -->
      <div class="xs12 md6 lg6 align-center justify-center">
        <transition
          v-if="heroImages[iterator] != undefined"
          mode="out-in"
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
          :duration="{ enter: 2000, leave: 1000 }"
        >
            <div v-if="iterator % 2 == 1">
              <img
                class="heroImage xs10"
                :src="baseUrl + heroImages[iterator].url"
                alt=""
              />
            </div>
            <div v-else-if="iterator % 2 == 0 && iterator != 4">
              <img
                class="heroImage xs10"
                :src="baseUrl + heroImages[iterator].url"
                alt=""
              />
            </div>
            <div v-else-if="iterator == 4">
              <img
                class="heroImage xs10"
                :src="baseUrl + heroImages[iterator].url"
                alt=""
              />
            </div>
        </transition>
      </div>

      <div class="xs12 md6 lg6" :class="[isMobileHelper() ? 'mt12 py4' : '']">
        <div class="heroText">
          <w-flex
            class="column"
            :class="[
              isMobileHelper()
                ? 'justify-center align-center'
                : 'justify-start align-start',
            ]"
            shrink
          >
            <h1>Opera4u.com</h1>
            <h2 class="text-left" style="white-space: nowrap;">
              We
              <transition
                mode="out-in"
                enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__fadeOutUp "
              >
                <span
                  v-if="heroText == 'manage'"
                  :key="heroText"
                  style="color: #770a00"
                  >{{ heroText }}</span
                >
                <span v-else :key="heroText" style="color: #770a00">{{
                  heroText
                }}</span>
              </transition>
              artists
            </h2>
          </w-flex>
        </div>
      </div>
    </w-flex>

    <w-flex class="row py12 justify-center">
      <a href="#about" v-smooth-scroll>
        <font-awesome-icon class="arrow1 black" icon="chevron-down" size="5x" />
      </a>
    </w-flex>

    <section id="about" class="my10">
      <w-flex wrap class="justify-center">
        <div class="xs12 md6 lg6">
          <w-flex class="column aboutText align-end justify-center">
            <div style="width: 100%;" class="text-left">
              <h1>Our Agency</h1>
            </div>
            <p class="headline my5" style="font-weight: 500">
              Opera4u has <span style="color: #770a00"><b>years</b></span> of professional experience and industry
              knowledge as an opera and concert agency.
            </p>
            <p class="headline mb5" style="font-weight: 500">
              It offers <span style="color: #770a00"><b>well-known</b></span> opera singers, conductors and
              directors.
            </p>
            <p class="headline" style="font-weight: 500">
              The promotion of young talents to the stars of tomorrow is
              <span style="color: #770a00"><b>our passion.</b></span>
            </p>
          </w-flex>
        </div>
        <div class="xs12 md6 lg6 heroImageContainer">
          <img class="heroImage xs8 mt10" src="@/assets/team.jpg" alt="" />
        </div>
      </w-flex>
    </section>

    <w-flex class="row py8 justify-center">
      <a href="#news" v-smooth-scroll>
        <font-awesome-icon class="arrow1 black" icon="chevron-down" size="5x" />
      </a>
    </w-flex>

    <section id="news" class="my10">
      <w-flex class="column">
        <h1 class="headline pt3 pb4" style="font-weight: 500">Latest News</h1>
        <div v-if="recentNews.length != 0" class="divider">
          <w-divider></w-divider>
          <w-flex
            class="row pt6 xs12 text-left"
            :class="[isMobileHelper() ? 'column' : 'row']"
          >
            <HomeNewsArticle
              v-if="recentNews.length >= 1"
              :title="recentNews[0].title"
              :image="recentNews[0].image.url"
              :body="recentNews[0].body"
              :artist="recentNews[0].artists[0].name"
              :date="recentNews[0].date"
              :id="recentNews[0].id"
              :slug="recentNews[0].slug"
              class="mr5 mb5 md6 xs12"
            />
            <w-flex class="column md5 xs12">
              <HomeNewsArticle
                v-if="recentNews.length >= 2"
                :title="recentNews[1].title"
                :image="recentNews[1].image.url"
                body=""
                :artist="
                  recentNews[1].artists.length
                    ? recentNews[1].artists[0].name
                    : ''
                "
                :date="recentNews[1].date"
                :id="recentNews[1].id"
                :slug="recentNews[1].slug"
                class="mr5 mb5 xs12"
              />
              <HomeNewsArticle
                v-if="recentNews.length >= 3"
                :title="recentNews[2].title"
                :image="recentNews[2].image.url"
                body=""
                :artist="
                  recentNews[2].artists.length
                    ? recentNews[2].artists[0].name
                    : ''
                "
                :date="recentNews[2].date"
                :id="recentNews[2].id"
                :slug="recentNews[2].slug"
                class="mr5 mb5 xs12"
              />
            </w-flex>
            <HomeNewsArticle
              v-if="recentNews.length >= 4"
              :title="recentNews[3].title"
              :image="recentNews[3].image.url"
              :body="recentNews[3].body"
              :artist="
                recentNews[3].artists.length
                  ? recentNews[3].artists[0].name
                  : ''
              "
              :date="recentNews[3].date"
              :id="recentNews[3].id"
              :slug="recentNews[3].slug"
              class="mb5 md4 xs12"
              :class="[isMobileHelper() ? '' : 'ml5']"
            />
          </w-flex>
        </div>
      </w-flex>
      <FeaturedArtists :artists="artists" />
    </section>
  </div>
</template>

<script>
import HomeNewsArticle from "@/views/home/components/HomeNewsArticle.vue";
import FeaturedArtists from "@/components/FeaturedArtists/FeaturedArtists.vue";

const baseAPI = process.env.VUE_APP_STRAPI_BASE_API;

export default {
  title: "Opera4u - Artist Management",
  name: "Home",
  data() {
    return {
      recentNews: [],
      artists: [],
      heroImages: [],
      heroText: "manage",
      iterator: 0,
      baseUrl: baseAPI,
      windowWidth: window.innerWidth,
    };
  },
  components: {
    HomeNewsArticle,
    FeaturedArtists,
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  methods: {
    async fetchHeroImages() {
      const res = await fetch(`${baseAPI}/hero-images`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      this.heroImages = res.pop().images;
    },

    async fetchRecentNews() {
      const NUMBER_OF_NEWS = 5;
      this.recentNews = [];

      //Making GET request for news
      const res = await fetch(`${baseAPI}/news-articles?_limit=-1`, {
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
        if (obj.homepage) {
          this.recentNews.push(obj);
          for (let j = 0; j < obj.artists.length; j++) {
            if (!this.containsArtist(obj.artists[j], this.artists))
              this.artists.push(obj.artists[j]);
          }
          i++;
        }
      }
    },

    containsArtist(obj, list) {
      var i;
      for (i = 0; i < list.length; i++) {
        if (list[i].name === obj.name) {
          return true;
        }
      }

      return false;
    },

    rollHeroText() {
      setInterval(() => {
        if (this.heroText === "manage") this.heroText = "provide";
        else this.heroText = "manage";
      }, 3500);
    },

    rollHeroImage() {
      setInterval(() => {
        if (this.iterator === 4) this.iterator = 0;
        else this.iterator++;
      }, 3500);
    },

    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },

  async created() {
    await this.fetchHeroImages();
    await this.fetchRecentNews();
    this.rollHeroText();
    this.rollHeroImage();
  },
};
</script>

<style lang="scss">
.hero {
  padding-top: 15vh;
}

.heroImage {
  -webkit-box-shadow: 11px 16px 23px -6px rgba(0, 0, 0, 0.41);
  box-shadow: 11px 16px 23px -6px rgba(0, 0, 0, 0.41);
  margin: auto;
  height: 50vh;
  object-fit: cover;
}

.heroImageContainer {
  display: block;
  text-align: left;
}

.heroText {
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10vw;
  padding-left: 5vw;

  h1 {
    font-weight: 300;
    font-size: 3rem;
  }

  h2 {
    font-weight: 300;
    font-size: 2.5rem;
  }
}

.aboutText {
  text-align: right;
  height: 90%;
  width: 100%;
  display: flex;
  align-items: right;
  padding-left: 10vw;
  padding-right: 5vw;
  font-weight: 500;
  margin-top: 2vw;

  p {
    color: #666666;
    font-size: 1.5rem !important
  }

  h1 {
    text-align: right;
    font-size: 2rem;
    font-weight: 500;
  }
}

@keyframes slide1 {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 10px);
  }
}

.arrow1 {
  animation: slide1 2s ease-in-out infinite;
}

.divider {
  margin-right: 12vw;
  margin-left: 12vw;
}

@supports (display: grid) {
  .hero {
    padding-top: 10vh;
  }

  .aboutText {
    p {
      font-size: 10vw;
    }
  }

  @media (max-width: 60rem) {
    .hero {
      padding-top: 5vh;
    }

    .heroImage {
      height: 40vh;
    }

    .heroText {
      padding-left: 10vw;
      padding-right: 10vw;

      h1 {
        font-size: 10vw;
      }

      h2 {
        font-size: 6vw;
      }
    }

    .aboutText {
      p {
        font-size: 4vw !important;
        text-align: left;
      }

      h1 {
        text-align: left;
        font-size: 8vw;
      }
    }

    .heroImageContainer {
      text-align: center;
    }
  }
}
</style>
