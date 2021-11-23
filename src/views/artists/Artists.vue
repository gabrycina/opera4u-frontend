<template>
  <div class="about">
    <h1 id="title">Artists</h1>

    <div>
      <select v-model="selected" class="py3 pl8 input">
        <option value="">Pick a Category</option>
        <option
          v-for="category in categories"
          :value="category.displayName"
          :key="category.id"
        >
          {{ category.displayName }}
        </option>
      </select>
    </div>

    <!-- TODO UNCOMMENT -->
    <!-- <DownloadButton text="Download All Artists" :proxy="pdf"/> -->

    <div :key="category.id" v-for="category in filteredCategories">
      <div class="divider">
        <h1 class="pt10 pb3 text-left ole" style="font-weight: 300; word-wrap: break-word;">
          {{ category.displayName }}
        </h1>
        <w-divider></w-divider>
        <w-flex class="row wrap">
          <section v-if="category.artists.length == 0" class="text-center xs12 px5">
            <h1 class="pa12" style="color: #868686; font-weight: 300; opacity: .5">
              No Artists in this Category
            </h1>
          </section>
          <section
            class="lg3 md3 xs12 py5 px5"
            v-for="artist in category.artists"
            :key="artist.id"
          >
            <router-link :to="{ name: 'Artist', params: { id: artist.id } }">
              <w-flex class="column align-center">
                <div class="cardImage xs12">
                  <img :src="baseUrl + artist.avatar.url" />
                </div>
                <p class="title2 pt4">
                  <b>{{ artist.name }}</b>
                </p>
              </w-flex>
            </router-link>
          </section>
        </w-flex>
      </div>
    </div>
  </div>
</template>

<script>
//show and not show corrispondent categories, divfor foreach cateogory NAME+LIST OF ARTISTS
//import Buttons from "../../components/Buttons.vue";
//import DownloadButton from "../../components/DownloadButton.vue"
const baseAPI = process.env.VUE_APP_STRAPI_BASE_API;
export default {
  title: "Opera4u - Our Artists",
  name: "Artists",
  data() {
    return {
      categories: [],
      selected: "",
      search: "",
      pdf: {},
      baseUrl: baseAPI,
    };
  },
  components: {
    //Buttons,
    //DownloadButton
  },
  methods: {
    //Grabs categories+artists from db and sets up
    //categories and selected arrays
    compare(a,b) {
      if (a.name < b.name)
        return 1;
      if (a.name > b.name)
        return -1;
      return 0;
    },

    async fetchCategories() {
      const res = await fetch(`${baseAPI}/categories`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      this.categories = res;
      
      for (let i = 0; i < this.categories.length; i++) {
        this.categories[i].artists.sort(this.compare)
      }

      console.log(this.categories);
    },

    //Turns one and just one button on, turning all the others off
    selectCategory(id) {
      var len = this.selected.length;
      for (let i = 0; i < len; i++) {
        if (i === id) this.selected[id] = !this.selected[id];
        else this.selected[i] = false;
      }
    },

    //gets pdf object from cms media library
    async fetchPdf() {
      const res = await fetch(`${baseAPI}/all-artists`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      this.pdf = res;
      console.log(this.pdf);
    },
  },

  //When visited, immediately starts setting up categories and artists
  created() {
    this.fetchCategories();
    this.fetchPdf();
  },

  computed: {
    //computed array with all the selected categories inside
    //all case: no filter applied
    filteredCategories: function() {
      if (this.selected == "") return this.categories;
      else {
        return this.categories.filter((category) => {
          return this.selected === category.displayName;
        });
      }
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

.about {
  h1 {
    font-weight: 300;
  }
}

#title {
  font-size: 5vw;
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
  border-radius: 100000000px;
  box-shadow: 0 0.1875rem 0.8rem $shadow;
  outline: none;
  margin: 0;
  box-sizing: border-box;
  background-image: url(https://image.flaticon.com/icons/png/512/32/32195.png);
  background-repeat: no-repeat;
  background-size: 0.8em auto;
  background-position: 0.7em center;
  font-size: 1rem;

  @supports (display: grid) {
    @media (max-width: 40rem) {
      margin-top: 1rem;
      max-width: 80vw;
    }
  }
}

h2 {
  font-weight: normal;
}

.cardImage {
  height: 14em;
  max-width: 14em;
  border-radius: 2em;
  box-shadow: 0 0.1875rem 0.8rem $shadow;
  text-align: center;
}

p {
  background: linear-gradient(180deg, #a6291e 0%, #640800 100%);
  font-size: 5vw;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

img {
  border-radius: .5em;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
