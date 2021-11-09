<template>
  <w-flex class="column xs12">
    <section v-if="agent != {}" class="container">
      <w-flex :class="[isMobileHelper() ? 'column' : 'row']">
        <w-flex class="column xs12 md1 lg1 text-left mb12 ">
          <div class="cardImage xs12" v-if="agent.avatar">
            <img :src="baseUrl + agent.avatar.url" />
          </div>
          <h3 class="gradientText pt4">Email</h3>
          <a :href="'mailto:' + agent.email">
            <w-flex
              class="row contactContainer mt2 mb4 justify-space-evenly align-center"
            >
              <div>
                <font-awesome-icon class="black mx3" icon="envelope" />
              </div>
              <h1 id="contactText">
                {{ agent.name }}
              </h1>
              <font-awesome-icon
                class="black mr5"
                icon="chevron-down"
                rotation="270"
              />
            </w-flex>
          </a>
        </w-flex>

        <w-flex class="column xs12 md5 lg5">
          <div v-if="agent" class="text-left title1">
            <h1>
              {{ agent.name }}
            </h1>
            <h2 class="text">
              {{ agent.role }}
            </h2>
            <w-divider class="my3"></w-divider>
            <w-flex class="row justify-start mb3">
              <div
                v-if="agent.bioEnglish"
                class="button"
                :class="[
                  bioSelected == 'en' ? 'button__active' : 'button__inactive',
                ]"
                @click="changeActiveBio('en')"
              >
                EN
              </div>
              <div
                v-if="agent.bioGerman"
                class="button ml3"
                :class="[
                  bioSelected == 'de' ? 'button__active' : 'button__inactive',
                ]"
                @click="changeActiveBio('de')"
              >
                DE
              </div>
              <div
                v-if="agent.bioItalian"
                class="button ml3"
                :class="[
                  bioSelected == 'it' ? 'button__active' : 'button__inactive',
                ]"
                @click="changeActiveBio('it')"
              >
                IT
              </div>
            </w-flex>
            <read-more class="text" :text="bio" :max-chars="380"></read-more>
          </div>
        </w-flex>
      </w-flex>
    </section>
    <section class="container">
      <h1 class="mt5 pb3 text-left ole" style="font-weight: 300;">
        Managed Artists
      </h1>
      <w-divider></w-divider>
      <div class="managedArtists">
        <w-flex
          style="max-height: 20rem"
          class="column wrap mt4 justify-start align-start"
        >
          <div v-for="artist in agent.artists" :key="artist">
            <div v-if="artist.avatar && artist.bioEnglish">
              <router-link :to="{ name: 'Artist', params: { id: artist.id } }">
                <h1 class="my1 active">{{ artist.name }}</h1>
              </router-link>
            </div>
            <div v-else>
              <h1 class="my1 inactive">{{ artist.name }}</h1>
            </div>
          </div>
        </w-flex>
      </div>
    </section>
  </w-flex>
</template>

<script>
import ReadMore from "../../components/ReadMore.vue";

const baseAPI = process.env.VUE_APP_STRAPI_BASE_API;
export default {
  name: "Agent",
  props: ["id"],
  data() {
    return {
      agent: {},
      baseUrl: baseAPI,
      bio: "",
      bioSelected: "en",
      reload: 0,
      windowWidth: window.innerWidth,
    };
  },
  components: {
    ReadMore,
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },

    changeActiveBio(nextActive) {
      this.bioSelected = nextActive;
      if (this.bioSelected == "en") this.bio = this.agent.bioEnglish;
      else if (this.bioSelected == "it") this.bio = this.agent.bioItalian;
      else this.bio = this.agent.bioGerman;
    },

    async fetchAgent() {
      const res = await fetch(baseAPI + "/agents/" + this.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      this.agent = res;
      console.log(res);
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  async created() {
    await this.fetchAgent();
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
  font-weight: 300;
  font-size: 1.4vw;
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
  font-size: 1.5vw;
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
    .agentName {
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

.active {
  background: linear-gradient(180deg, #a6291e 0%, #640800 100%);
  font-size: 1.5vw;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @supports (display: grid) {
    @media (max-width: 40rem) {
      font-size: 5vw;
    }
  }
}

.inactive {
  color: #868686;
  font-size: 1.5vw;
  @supports (display: grid) {
    @media (max-width: 40rem) {
      font-size: 5vw;
    }
  }
}
</style>
