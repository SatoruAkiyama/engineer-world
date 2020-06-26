<template>
  <div class="grobal-container">
    <div class="production__title">
      <h1>AI/IoT開発</h1>
    </div>
    <div class="container">
      <div class="production">
        <h1 class="content-title">AI/IoT開発</h1>
        <div class="field__inner" v-for="(app, index) in apps" :key="index">
          <div class="field__img">
            <img :src="app.img" />
            <div class="field__title">
              <h1>{{ app.name }}</h1>
            </div>
          </div>
          <div class="field__text">
            <div class="field__sub">
              <h4>{{ app.sub }}</h4>
            </div>
            <div class="field__detail">
              <p>{{ app.detail }}</p>
            </div>
            <div class="field__more">
              <div class="btn">
                <a :href="app.url">
                  <button>
                    サイトへ
                    <span class="material-icons">navigate_next</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
