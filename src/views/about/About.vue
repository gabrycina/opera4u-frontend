<template>
  <div>
    <w-flex class="row justify-center xs12">
      <div class="container">
        <h1 id="title">Our Agency</h1>
        <p class="headline my5">
          Opera4u has <b>years</b> of professional experience and industry
          knowledge as an opera and concert agency.
        </p>
        <p class="headline mb5">
          It offers <b>well-known</b> opera singers, conductors and directors.
        </p>
        <p class="headline">
          The promotion of young talents to the stars of tomorrow is
          <span style="color: #770a00"><b>our passion.</b></span>
        </p>
      </div>
    </w-flex>

    <div class="divider">
      <h1 class="pt10 pb3 text-left ole" style="font-weight: 300;">
        Our Team
      </h1>
      <w-divider></w-divider>
      <w-flex class="row wrap">
        <section v-if="team.length == 0" class="text-center xs12 px5">
          <h1
            class="pa12"
            style="color: #868686; font-weight: 300; opacity: .5"
          >
            No Team Members Added Yet
          </h1>
        </section>
        <section
          class="lg3 md3 xs12 py5 px5"
          v-for="agent in team"
          :key="agent.id"
        >
          <router-link :to="{ name: 'Agent', params: { id: agent.id } }">
            <w-flex class="column">
              <div class="cardImage xs12">
                <img :src="baseUrl + agent.avatar.url" />
              </div>
              <p class="title2 pt4 name">
                <b>{{ agent.name }}</b>
              </p>
            </w-flex>
          </router-link>
        </section>
      </w-flex>
    </div>
  </div>
</template>

<script>
export default {
  title: "Opera4u - About Us",
  name: "About",
  data() {
    return {
      baseUrl: "http://localhost:1337",
      team: [],
    };
  },
  methods: {
    async fetchTeam() {
      const res = await fetch("http://localhost:1337/agents", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      this.team = res;
      console.log(this.team);
    },
  },
  created() {
    this.fetchTeam();
  },
};
</script>

<style scoped lang="scss">
$shadow: rgba(0, 0, 0, 0.2);

#title {
  font-size: 5vw;
  padding-top: 3vw;
  padding-bottom: 1vw;
  @media (max-width: 40rem) {
    font-size: 12vw;
  }
}

.container {
  margin-left: 35vw;
  margin-right: 35vw;

  p {
    color: #868686;
    font-size: 1.8vw;
  }

  @media (max-width: 40rem) {
      margin-left: 10vw;
      margin-right: 10vw;

      p {
        font-size: 6vw;
      }
  }
}

.cardImage {
  height: 14em;
  max-width: 14em;
  border-radius: 2em;
  box-shadow: 0 0.1875rem 0.8rem $shadow;
  text-align: center;
}

img {
  border-radius: 0.5em;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  background: linear-gradient(180deg, #a6291e 0%, #640800 100%);
  font-size: 1.8vw;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 40rem) {
    font-size: 8vw;
  }
}
</style>
