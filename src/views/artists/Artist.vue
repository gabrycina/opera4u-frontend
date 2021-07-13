<template>
  <h1>this is {{ artist.name }}</h1>
</template>

<script>
export default {
  props: ["id"],
  data(){
      return {
          artist: {}
      }
  },
  methods: {

    async fetchArtist() {
      const res = await fetch("http://localhost:1337/artists?id="+this.id+"", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());
    
        this.artist = res[0]
        console.log(this.artist)

    },
  },
  created() {
    this.fetchArtist()
  },
};
</script>
