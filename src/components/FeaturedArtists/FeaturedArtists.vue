<template>
  <div class="divider">
    <h1 class="pt10 text-left ole">
      <b>Featured Artists</b>
    </h1>
    <w-divider class="my4"></w-divider>
    <vue-horizontal class="horizontal">
      <div class="item" v-for="artist in artists" :key="artist.name">
        <router-link :to="{ name: 'Artist', params: { id: artist.id } }">
          <div class="card">
            <div class="image" :style="{background: `url(${baseUrl + artist.avatar.url})`}"></div>
            <div class="content">
              <div>
                <div class="brand">
                  <svg class="icon" viewBox="0 0 24 24">
                    <path
                      d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z"/>
                    <path d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z"/>
                  </svg>
                  <div class="name">{{ artist.name.length > 20 ? artist.name.substring(0, 20)+"..." : artist.name }}</div>
                </div>
                <div class="title">{{ artist.bioEnglish.substring(0, 40)+"..." }}</div>
              </div>
            </div>
          </div>
        </router-link>

      </div>
    </vue-horizontal>
  </div>
</template>

<script>
import VueHorizontal from 'vue-horizontal';
const baseAPI = process.env.VUE_APP_STRAPI_BASE_API;

export default {
  components: {VueHorizontal},
  name: "FeaturedArtists",
  props: {
    artists: Array,
  },
  data() {
    return {
      baseUrl: baseAPI,
    }
  }
}
</script>

<!-- Content Design -->
<style scoped>
.card {
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.image {
  background-position: 0% 30% !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  padding-top: 50%;
}

.content {
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  color: #333333;
}

.brand .icon {
  flex-shrink: 0;
  height: 20px;
  width: 20px;
  fill: currentColor;
}

.brand .name {
  margin-left: 4px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
  background: linear-gradient(180deg, #a6291e 0%, #640800 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title {
  font-size: 12px;
  font-weight: 700;
  line-height: 1.6;
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: left;
}

.date {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
}
</style>

<!-- Parent CSS (Container) -->
<style scoped>
.header {
  margin-bottom: 16px;
}
</style>

<!-- Responsive Breakpoints -->
<style scoped>
.horizontal {
  --count: 1;
  --gap: 16px;
  --margin: 24px;
}

@media (min-width: 640px) {
  .horizontal {
    --count: 2;
  }
}

@media (min-width: 768px) {
  .horizontal {
    --count: 3;
    --margin: 0;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 4;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --gap: 24px;
    --count: 5;
  }
}
</style>

<!--
## Responsive Logic
The margin removes the padding from the parent container and add it into vue-horizontal.
If the gap is less than margin, this causes overflow to show and peeks into the next content for better UX.
You can replace this section entirely for basic responsive CSS logic if you don't want this "peeking" experience
for the mobile web.
Note that this responsive logic is hyper sensitive to your design choices, it's not a one size fit all solution.
var() has only 95% cross browser compatibility, you should convert it to fixed values.

There are 2 set of logic:
0-768 for peeking optimized for touch scrolling.
>768 for navigation via buttons for desktop/laptop users.
-->
<style scoped>
@media (max-width: 767.98px) {
  .item {
    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count));
    padding: 0 calc(var(--gap) / 2);
  }

  .item:first-child {
    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) - (var(--gap) / 2));
    padding-left: var(--margin);
  }

  .item:last-child {
    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) - (var(--gap) / 2));
    padding-right: var(--margin);
  }

  .item:only-child {
    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) * 2 - var(--gap));
  }

  .horizontal {
    margin: 0 calc(var(--margin) * -1);
  }

  .horizontal >>> .v-hl-container {
    scroll-padding: 0 calc(var(--margin) - (var(--gap) / 2));
  }

  .horizontal >>> .v-hl-btn {
    display: none;
  }
}

@media (min-width: 768px) {
  .item {
    width: calc((100% - ((var(--count) - 1) * var(--gap))) / var(--count));
    margin-right: var(--gap);
  }
}

a:-webkit-any-link {
  color: inherit;
  cursor: pointer;
}
</style>

<!-- <template>
  <div class="divider">
    <h1 class="pt10 text-left ole">
      <b>Featured Artists</b>
    </h1>
    <w-divider></w-divider>
    <vue-horizontal responsive>
      <section
        class="lg6 md6 xs12 py5 pl10"
        v-for="artist in artists"
        :key="artist.name"
      >
        <router-link :to="{ name: 'Artist', params: { id: artist.id } }">
          <FeaturedArtist :artist="artist" />
        </router-link>
      </section>
    </vue-horizontal>
  </div>
</template>

<script>
import VueHorizontal from "vue-horizontal";
import FeaturedArtist from "./FeaturedArtist.vue";

export default {
  name: "FeaturedArtists",
  props: {
    artists: Array,
  },
  components: {
    VueHorizontal,
    FeaturedArtist,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.5rem;
  padding-bottom: 1rem;
}

a:-webkit-any-link {
  color: inherit;
  cursor: pointer;
}
</style> -->
