<template>
  <w-flex class="column xs12">
    <section v-if="artist != {}" class="container">
      <w-flex class="row">
        <w-flex class="column xs12 md1 lg1 text-left">
          <div class="cardImage xs12" v-if="artist.avatar">
            <img :src="baseUrl + artist.avatar.url" />
          </div>
          <p id="copy" class="pt2 pl2 text-left">Photo by @{{ artist.name }}</p>
          <h3 class="gradientText pt4">Contact</h3>
          <router-link
            v-if="artist.agent"
            :to="{ name: 'Agent', params: { id: artist.agent[0].id } }"
          >
            <w-flex
              class="row contactContainer mt2 mb4 justify-space-evenly align-center"
            >
              <div class="contact" v-if="artist.agent[0].avatar">
                <img
                  style="object-fit:cover;"
                  :src="baseUrl + artist.agent[0].avatar.url"
                />
              </div>
              <h1 style="white-space: nowrap; font-size: .9vw">
                {{ artist.agent[0].name }}
              </h1>
              <font-awesome-icon
                class="black ml3"
                icon="chevron-down"
                rotation="270"
              />
            </w-flex>
          </router-link>

          <w-divider class="mr12"></w-divider>
          <w-flex class="row mt2">
            <font-awesome-icon class="black" :icon="['fab', 'facebook']" />
            <font-awesome-icon class="black ml2" :icon="['fab', 'instagram']" />
            <font-awesome-icon class="black ml2" :icon="['fab', 'youtube']" />
          </w-flex>
          <p class="mt2 text">{{ artist.artistWebsite }}</p>
        </w-flex>

        <w-flex class="column xs12 md5 lg5">
          <div v-if="artist.category" class="text-left title1">
            <h1>
              {{ artist.name }}
            </h1>
            <h2 class="text" style="font-size: 1.8vw">
              {{ artist.category[0].displayName }}
            </h2>
            <w-divider class="my3"></w-divider>
            <b>
              <read-more
                class="text"
                style="font-size: 1.2vw"
                more-str="Read More"
                :text="bio"
                link="#"
                less-str="Read Less"
                :max-chars="380"
              ></read-more>
            </b>
          </div>
        </w-flex>
      </w-flex>
    </section>
    <section class="container">
      <h1 class="pt10 pb3 text-left ole" style="font-weight: 300;">
        Gallery
      </h1>
      <w-divider></w-divider>
      <w-flex class="column mt10" style="margin-left: 15vw; margin-right: 15vw">
        <div :key="reload">
          <vue-carousel :data="data" indicator-type="disc"></vue-carousel>
        </div>
      </w-flex>
    </section>
    <section class="container">
      <h1 class="pt10 pb3 text-left ole" style="font-weight: 300;">
        News on {{ artist.name }}
      </h1>
      <w-divider></w-divider>
      <w-flex class="column mt10" style="margin-left: 10vw; margin-right: 10vw">
      </w-flex>
    </section>
    <section class="container">
      <h1 class="pt10 pb3 text-left ole" style="font-weight: 300;">
        Press
      </h1>
      <w-divider></w-divider>
      <w-flex class="column mt10" style="margin-left: 10vw; margin-right: 10vw">
      </w-flex>
    </section>
    <section class="container">
      <h1 class="pt10 pb3 text-left ole" style="font-weight: 300;">
        Disography
      </h1>
      <w-divider></w-divider>
      <w-flex class="column mt10" style="margin-left: 10vw; margin-right: 10vw">
      </w-flex>
    </section>
  </w-flex>
</template>

<script>
export default {
  name: "Artist",
  props: ["id"],
  data() {
    return {
      artist: {},
      baseUrl: "http://localhost:1337",
      bio: this.artist ? this.artist.bioEnglish : "",
      data: [],
      reload: 0,
    };
  },
  methods: {
    async fetchArtist() {
      const res = await fetch(
        "http://localhost:1337/artists?id=" + this.id + "",
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

      this.reload++;
      console.log(this.data);
      console.log(this.artist);
    },
  },
  async created() {
    await this.fetchArtist();
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
}

.cardImage {
  height: 13em;
  max-width: 13em;
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

  @supports (display: grid) {
    @media (max-width: 40rem) {
      margin-top: 1rem;
      max-width: 80vw;
    }
  }
}

.contactContainer {
  box-shadow: 0 0.1rem 0.5rem $shadow;
  height: 2em;
  max-width: 10em;
  border-radius: 0.5em;
  text-align: center;

  h1 {
    font-size: 1.2vw;
  }
}

#copy {
  color: #868686;
  font-size: 0.8vw;
}

.text {
  color: #868686;
  font-size: 0.8vw;
}

.gradientText {
  background: linear-gradient(180deg, #a6291e 0%, #640800 100%);
  font-size: 1vw;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
</style>
