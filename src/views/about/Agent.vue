<template>
    <h1>{{ agent.name }}</h1>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      agent: {},
    };
  },
  methods: {
    async fetchAgent() {
      const res = await fetch("http://localhost:1337/agents?id="+this.id+"", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      this.agent = res[0];
      console.log(this.agent);
    },
  },
  created() {
    this.fetchAgent();
  },
};
</script>
