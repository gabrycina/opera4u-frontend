<template>
  <div class="about">
    <h1>This is about page</h1>
    <p>Statement of the agency</p>

    <h1>our team</h1>
    <div :key="agent.id" v-for="agent in team">
      <router-link :to="{ name: 'Agent', params: { id: agent.id } }">
        {{ agent.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Opera4u - About Us',
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
  data() {
    return {
      team: [],
    };
  },
  created() {
    this.fetchTeam();
  },
};
</script>
