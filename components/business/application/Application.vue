<template>
  <div class="grobal-container">
    <div class="production__title">
      <h1>アプリケーション開発</h1>
    </div>
    <div class="container">
      <div class="production">
        <h1 class="content-title">アプリケーション開発</h1>
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

<style lang="scss" scoped>
.production {
  &__title {
    background-image: url("https://cdn.pixabay.com/photo/2015/02/05/08/12/stock-624712_1280.jpg");
  }
}
</style>
