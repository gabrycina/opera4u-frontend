<template>
  <div>
    <w-flex class="row justify-center xs12">
      <div class="container">
        <h1 id="title">Our Agency</h1>
        <p class="headline mb5" style="font-weight: 500">
          Opera4u has <span style="color: #770a00"><b>years</b></span> of
          professional experience and industry knowledge as an opera and concert
          agency.
        </p>
        <p class="headline mb5" style="font-weight: 500">
          It offers <span style="color: #770a00"><b>well-known</b></span> opera
          singers, conductors and directors.
        </p>
        <p class="headline" style="font-weight: 500">
          The promotion of young talents to the stars of tomorrow is
          <span style="color: #770a00"><b>our passion.</b></span>
        </p>
      </div>
    </w-flex>

    <div class="divider">
      <h1 class="pt10 pb3 text-left ole" style="font-weight: 300">Our Team</h1>
      <w-divider></w-divider>
      <w-flex class="row wrap">
        <section v-if="team.length == 0" class="text-center xs12 px5">
          <h1
            class="pa12"
            style="color: #666666; font-weight: 300; opacity: 0.5"
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
            <w-flex class="column align-center">
              <div class="cardImage xs12">
                <img :src="baseUrl + agent.avatar.url" />
              </div>
              <p class="title2 pt4 name">
                {{ agent.name }}
              </p>
            </w-flex>
          </router-link>
        </section>
      </w-flex>
    </div>
  </div>
</template>

<script>
const baseAPI = process.env.VUE_APP_STRAPI_BASE_API;
export default {
  title: "Opera4u - About Us",
  name: "About",
  data() {
    return {
      baseUrl: baseAPI,
      team: [],
    };
  },
  methods: {
    async fetchTeam() {
      const res = await fetch(`${baseAPI}/agents`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      this.team = []
        .concat(res[1])
        .concat(res[3])
        .concat(res[2])
        .concat(res[4])
        .concat(res[0]);
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
  font-size: 2.5rem;
  padding-top: 3vw;
  padding-bottom: 1vw;
  @media (max-width: 40rem) {
    padding-top: 10vw;
    font-size: 2.5rem;
  }
}

.headline {
  font-weight: 500;
}

.container {
  margin-left: 35vw;
  margin-right: 35vw;

  p {
    color: #666666;
    font-size: 1.2rem;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
  }

  @media (max-width: 40rem) {
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 10vw;

    p {
      font-size: 1.2rem;
    }
  }
}

.cardImage {
  height: 12em;
  max-width: 12em;
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
  font-size: 1.2rem;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 40rem) {
    font-size: 5vw;
  }
}
</style>
