<template>
  <div class="grobal-container">
    <div class="production__title">
      <h1>ホームページ制作</h1>
    </div>
    <div class="container">
      <div class="production">
        <h1 class="content-title">ホームページ制作</h1>
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

<style lang="scss" scoped>
.production {
  &__title {
    background-image: url("https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg");
  }
}
</style>
