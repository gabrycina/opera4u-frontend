<template>
  <div class="home">
    <w-flex class="row hero justify-center">
      <div class="xs6">
        <img
          class="heroImage xs10"
          style="float:right;"
          src="@/assets/hero.jpg"
          alt=""
        />
      </div>
      <div class="xs6">
        <div class="heroText">
          <w-flex class="column justify-start align-start" shrink>
            <h2 style="font-size: 2vw;">Opera4u.com</h2>
            <h1
              class="headline text-left"
              style="font-size: 5vw; white-space: nowrap;"
            >
              We
              <transition
                mode="out-in"
                enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__fadeOutUp"
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
            </h1>
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
      <w-flex class="row justify-center">
        <div class="xs5">
          <w-flex class="column aboutText align-end justify-center">
            <h1 style="font-size: 4vw;">Our Agency</h1>
            <p class="headline my5 text-right" style="font-size: 1.8vw">
              Opera4u has <b>years</b> of professional experience
              and industry knowledge as an 
              opera and concert agency.
            </p>
            <p class="headline mb5 text-right" style="font-size: 1.8vw">
              It offers <b>well-known</b> opera singers, 
              conductors and directors.
            </p>
            <p class="headline text-right" style="font-size: 1.8vw">
              The promotion of young talents 
              to the stars of tomorrow is 
              <span style="color: #770a00"><b>our passion.</b></span>
            </p>
          </w-flex>
        </div>
        <div class="xs5">
          <img
            class="heroImage xs8 mt10"
            style="float:left;"
            src="@/assets/team.jpg"
            alt=""
          />
        </div>
      </w-flex>
    </section>
    <w-flex class="row py12 justify-center">
      <a href="#news" v-smooth-scroll>
        <font-awesome-icon class="arrow1 black" icon="chevron-down" size="5x" />
      </a>
    </w-flex>
    <section id="news" class="my10">

    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  title: "Opera4u - Artist Management",
  name: "Home",
  data() {
    return {
      recentNews: [],
      heroText: "manage",
    };
  },
  methods: {
    async fetchRecentNews() {
      const NUMBER_OF_NEWS = 5;

      //Making GET request for news
      const res = await fetch("http://localhost:1337/news-articles", {
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
          i++;
        }
      }

      //Debug print
      console.log("Objets of (max 5) most recent news");
      console.log(this.recentNews);
    },
    rollHeroText() {
      setInterval(() => {
        if (this.heroText === "manage") this.heroText = "provide";
        else this.heroText = "manage";
      }, 5000);
    },
  },
  created() {
    this.fetchRecentNews();
    this.rollHeroText();
  },
};
</script>

<style>
.hero {
  padding-top: 15vh;
}

.heroImage {
  -webkit-box-shadow: 11px 16px 23px -6px rgba(0, 0, 0, 0.41);
  box-shadow: 11px 16px 23px -6px rgba(0, 0, 0, 0.41);
}

.heroText {
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10vw;
  padding-left: 5vw;
  font-weight: lighter;
}

.aboutText {
  height: 90%;
  width: 100%;
  display: flex;
  align-items: right;
  padding-left: 10vw;
  padding-right: 5vw;
  font-weight: lighter;
  margin-top: 2vw;
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
</style>
