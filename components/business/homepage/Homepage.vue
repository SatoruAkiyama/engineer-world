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
      title: "ホームページ制作",
      bgUrl:
        "https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg",
      apps: [
        {
          name: "ホームページ制作",
          img:
            "https://cdn.pixabay.com/photo/2016/09/21/11/31/youtube-1684601__340.png",
          url: "",
          sub: "ホームページ制作",
          detail:
            "ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作"
        },
        {
          name: "ホームページ制作",
          img:
            "https://cdn.pixabay.com/photo/2016/09/13/11/08/browser-1666995__340.png",
          url: "",
          sub: "ホームページ制作",
          detail:
            "ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作"
        },
        {
          name: "ホームページ制作",
          img:
            "https://cdn.pixabay.com/photo/2016/08/26/18/19/responsive-1622825__340.png",
          url: "",
          sub: "ホームページ制作",
          detail:
            "ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作ホームページ制作"
        }
      ]
    };
  }
};
</script>
