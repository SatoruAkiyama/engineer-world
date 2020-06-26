<template>
  <div>
    <div class="preview-field" v-for="(field, index) in fields" :key="index">
      <div :id="field.id">
        <div class="field__inner">
          <div class="field__img">
            <img :src="field.img" />
            <div class="field__title">
              <h1>{{ field.name }}</h1>
            </div>
          </div>
          <div class="field__text">
            <div class="field__sub">
              <h4>{{ field.sub }}</h4>
            </div>
            <div class="field__detail">
              <p>{{ field.detail }}</p>
            </div>
            <div class="field__more">
              <div class="btn">
                <nuxt-link :to="'/' + field.path">
                  <button>
                    プロダクション
                    <span class="material-icons">navigate_next</span>
                  </button>
                </nuxt-link>
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
      fields: [
        {
          id: "application",
          name: "アプリケーション開発",
          img:
            "https://cdn.pixabay.com/photo/2015/02/05/08/12/stock-624712__340.jpg",
          sub:
            "優れた技術を持つエンジニアたちが、優れたものをスピーディーに作り上げます。設計から開発、保守、運用まで行います。",
          detail:
            "当社にはバックエンドにもフロントエンドにも精通するエンジニアが多数在籍しております。全員が常に学び続け、日々成長しています。",
          path: "business/application"
        },
        {
          id: "ui-ux-design",
          name: "UI/UX/デザイン",
          img:
            "https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002__340.jpg",
          sub:
            "優れた技術を持つデザイナー、フロントエンドエンジニアたちが、優れたものをスピーディーに作り上げます。設計から開発、保守、運用まで行います。",
          detail:
            "当社にはデザインに優れたエンジニアやデザインのスペシャリストが多数在籍しております。全員が常に学び続け、日々成長しています。",
          path: "business/ui-ux-design"
        },
        {
          id: "homepage",
          name: "ホームページ制作",
          img:
            "https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373__340.jpg",
          sub:
            "優れた技術を持つデザイナー、フロントエンドエンジニアたちが、優れたものをスピーディーに作り上げます。設計から開発、保守、運用まで行います。",
          detail:
            "当社にはデザインに優れたエンジニアやデザインのスペシャリストが多数在籍しております。全員が常に学び続け、日々成長しています。",
          path: "business/homepage"
        },
        {
          id: "ai-iot",
          name: "AI/IoT",
          img:
            "https://cdn.pixabay.com/photo/2020/06/01/13/26/technology-5246655__340.jpg",
          sub:
            "優れた技術を持つエンジニアたちが、優れたものをスピーディーに作り上げます。設計から開発まで行います。",
          detail:
            "当社には最先端技術に精通するエンジニアが多数在籍しております。全員が常に学び続け、日々成長しています。",
          path: "business/ai-iot"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.field {
  &__inner {
    position: relative;
  }

  &__title {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: #fff;
    background: rgba(15, 47, 134, 0.562);

    & h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
    }
  }

  &__img {
    position: relative;
    overflow: hidden;

    & img {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

  &__text {
    background: #eae8e8;
    padding: 10px;
  }

  &__sub {
    color: rgb(15, 86, 99);
    margin-bottom: 20px;
  }

  &__more {
    text-align: center;
    margin-top: 20px;

    & button {
      border: 1px solid #fff;
      background: #000;
      color: #fff;
      width: 180px;
      height: 30px;
      transition: all 0.3s;

      &:hover {
        border: 1px solid #000;
        background: #fff;
        color: #000;
      }

      & .material-icons {
        position: absolute;
      }
    }
  }
}

@media (min-width: 600px) {
  .field__text {
    padding: 20px;
  }
}

@media (min-width: 960px) {
  .field {
    &__inner {
      display: flex;
      justify-content: center;
    }

    &__img {
      width: 50%;
    }

    &__text {
      width: 50%;
    }
  }
}
</style>
