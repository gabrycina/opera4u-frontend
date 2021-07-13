<template>
  <div class="about">
    <h1>This is artists page</h1>

    <DownloadButton text="Download All Artists" :proxy="pdf"/>

    <Buttons
      @object-selection="selectCategory"
      :objects="categories"
      :selected="selected"
    />

    <div :key="category.id" v-for="category in filteredCategories">
      {{ category.name }}
      <div :key="artist.id" v-for="artist in category.artists">
        <router-link :to="{ name: 'Artist', params: { id: artist.id } }">
          <Card :name="artist.name" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
//show and not show corrispondent categories, divfor foreach cateogory NAME+LIST OF ARTISTS
import Buttons from "../../components/Buttons.vue";
import Card from "../../components/Card.vue";
import DownloadButton from "../../components/DownloadButton.vue"

export default {
  name: "Artists",
  data() {
    return {
      categories: [],
      selected: [],
      search: "",
      pdf: {},
    };
  },
  components: {
    Buttons,
    Card,
    DownloadButton
  },
  methods: {
    //Grabs categories+artists from db and sets up
    //categories and selected arrays
    async fetchArtists() {
      const res = await fetch("http://localhost:1337/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      this.categories = res;

      for (let i = 1; i < this.categories.length + 1; i++)
        this.selected[i] = false;

      this.selected[0] = true;
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
      const res = await fetch("http://localhost:1337/all-artists", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      this.pdf = res;
      console.log(this.pdf);
    },

    // //Download of a pdf
    // forceFileDownload(response, title) {
    //   console.log(title);
    //   const url = window.URL.createObjectURL(
    //     new Blob([response.data], {
    //       type: "application/pdf",
    //     })
    //   );
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.setAttribute("download", title);
    //   document.body.appendChild(link);
    //   link.click();
    // },
    // downloadWithAxios(proxy) {
    //   const target_copy = Object.assign({}, proxy);
    //   var title = proxy.name;
    //   var url = target_copy.pdf.url;
    //   console.log(url);
    //   console.log(title);
    //   axios({
    //     method: "get",
    //     baseURL: "http://localhost:1337",
    //     url,
    //     responseType: "blob",
    //   })
    //     .then((response) => {
    //       this.forceFileDownload(response, title);
    //     })
    //     .catch((e) => console.log(e));
    // },
  },

  //When visited, immediately starts setting up categories and artists
  created() {
    this.fetchArtists();
    this.fetchPdf();
  },

  computed: {
    //computed array with all the selected categories inside
    //all case: no filter applied
    filteredCategories: function() {
      if (this.selected[0]) return this.categories;
      else {
        return this.categories.filter((category) => {
          return this.selected[category.id] === true;
        });
      }
    },
  },
};
</script>
