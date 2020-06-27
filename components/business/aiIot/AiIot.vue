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
      title: "AI/IoT開発",
      bgUrl:
        "https://cdn.pixabay.com/photo/2020/06/01/13/26/technology-5246655_1280.jpg",
      apps: [
        {
          name: "AI/IoT開発",
          img:
            "https://cdn.pixabay.com/photo/2016/11/04/11/46/robot-1797548__340.png",
          url: "",
          sub: "AI/IoT開発",
          detail:
            "AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発"
        },
        {
          name: "AI/IoT開発",
          img:
            "https://cdn.pixabay.com/photo/2020/05/21/21/28/ai-5202865__340.jpg",
          url: "",
          sub: "AI/IoT開発",
          detail:
            "AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発"
        },
        {
          name: "AI/IoT開発",
          img:
            "https://cdn.pixabay.com/photo/2020/01/11/15/28/robot-4757878__340.jpg",
          url: "",
          sub: "AI/IoT開発",
          detail:
            "AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発AI/IoT開発"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.production {
  &__title {
    background-image: url("https://cdn.pixabay.com/photo/2020/06/01/13/26/technology-5246655_1280.jpg");
  }
}
</style>
