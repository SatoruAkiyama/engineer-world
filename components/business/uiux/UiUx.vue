<template>
  <BusinessTemplate :apps="apps" :title="title" :bgUrl="bgUrl" />
</template>

<script>
import BusinessTemplate from "../BusinessTemplate";
export default {
  data() {
    return {
      title: "UI/UX/デザイン",
      bgUrl:
        "https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg",
      apps: [
        {
          name: "UI/UX/デザイン",
          img:
            "https://cdn.pixabay.com/photo/2017/05/14/16/05/ui-2312399__340.jpg",
          url: "",
          sub: "UI/UX/デザイン",
          detail:
            "UI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザイン"
        },
        {
          name: "UI/UX/デザイン",
          img:
            "https://cdn.pixabay.com/photo/2020/01/26/21/57/computer-4796017__340.jpg",
          url: "",
          sub: "UI/UX/デザイン",
          detail:
            "UI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザイン"
        },
        {
          name: "UI/UX/デザイン",
          img:
            "https://cdn.pixabay.com/photo/2015/05/29/10/33/ux-789162__340.jpg",
          url: "",
          sub: "UI/UX/デザイン",
          detail:
            "UI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザインUI/UX/デザイン"
        }
      ]
    };
  },
  components: {
    BusinessTemplate
  }
};
</script>
