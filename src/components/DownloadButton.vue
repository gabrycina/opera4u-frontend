<template>
  <button @click="downloadWithAxios(proxy)">
    {{ text }}
  </button>
</template>

<script>
import axios from "axios";
 const baseAPI = process.env.VUE_APP_STRAPI_BASE_API;
export default {
  name: "DownloadButton",
  props: {
    text: String,
    proxy: {},
  },
  methods: {
    //Download of a pdf
    forceFileDownload(response, title) {
      console.log(title);
      const url = window.URL.createObjectURL(
        new Blob([response.data], {
          type: "application/pdf",
        })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", title);
      document.body.appendChild(link);
      link.click();
    },
    downloadWithAxios(proxy) {
      const target_copy = Object.assign({}, proxy);
      var title = proxy.name;
      var url = target_copy.pdf.url;
      console.log(url);
      console.log(title);
      axios({
        method: "get",
        baseURL: baseAPI,
        url,
        responseType: "blob",
      })
        .then((response) => {
          this.forceFileDownload(response, title);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
