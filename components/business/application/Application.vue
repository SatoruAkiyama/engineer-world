<template>
  <BusinessTemplate :apps="apps" :title="title" :bgUrl="bgUrl" />
</template>

<script>
import BusinessTemplate from "../BusinessTemplate";
export default {
  components: {
    BusinessTemplate
  },
  data() {
    return {
      title: "アプリケーション開発",
      bgUrl:
        "https://cdn.pixabay.com/photo/2015/02/05/08/12/stock-624712_1280.jpg",
      apps: [
        {
          name: "アプリケーション開発",
          img:
            "https://cdn.pixabay.com/photo/2020/06/18/19/27/mobile-phone-5314741_1280.png",
          url: "",
          sub: "こちらはWebアプリケーションです。",
          detail:
            "アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発"
        },
        {
          name: "アプリケーション開発",
          img:
            "https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_1280.jpg",
          url: "",
          sub: "こちらはWebアプリケーションです。",
          detail:
            "アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発"
        },
        {
          name: "アプリケーション開発",
          img:
            "https://cdn.pixabay.com/photo/2020/02/12/05/41/coronavirus-4841736_1280.jpg",
          url: "",
          sub: "こちらはWebアプリケーションです。",
          detail:
            "アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発アプリケーション開発"
        }
      ]
    };
  }
};
</script>
