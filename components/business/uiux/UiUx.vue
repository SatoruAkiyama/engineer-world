<template>
  <div class="grobal-container">
    <div class="production__title">
      <h1>UI/UX/デザイン</h1>
    </div>
    <div class="container">
      <div class="production">
        <h1 class="content-title">UI/UX/デザイン</h1>
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
  }
};
</script>

<style lang="scss" scoped>
.production {
  &__title {
    background-image: url("https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg");
  }
}
</style>
