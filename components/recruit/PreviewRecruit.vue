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
                    詳細
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
          id: "full-stack",
          name: "フルスタックエンジニア",
          img:
            "https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png",
          sub:
            "優れた技術を持つエンジニアたちと、最高の物を作り上げましょう。設計から開発、保守、運用まで行います。",
          detail:
            "フロントエからバックエンドまで扱えるシニアレベルのエンジニアを募集しております。実務経験3年以上。",
          path: "recruit/full-stack"
        },
        {
          id: "back-end",
          name: "バックエンドエンジニア",
          img:
            "https://cdn.pixabay.com/photo/2019/08/20/03/24/monitor-4417642_1280.jpg",
          sub:
            "優れた技術を持つバックエンドジニアたちと、最高の物を作り上げましょう。設計から開発、保守、運用まで行います。",
          detail:
            "バックエンドを扱える、または少しでも使ったことがある人を募集しております。実務経験不要。",
          path: "recruit/back-end"
        },
        {
          id: "front",
          name: "フロントエンジニア",
          img:
            "https://cdn.pixabay.com/photo/2019/05/01/21/39/programming-4172154_1280.jpg",
          sub:
            "優れた技術を持つフロントエンジニアたちと、最高の物を作り上げましょう。設計から開発、保守、運用まで行います。",
          detail:
            "フロントエンドを扱える、または少しでも使ったことがある人を募集しております。実務経験不要。",
          path: "recruit/front"
        },
        {
          id: "designer",
          name: "デザイナー",
          img:
            "https://cdn.pixabay.com/photo/2016/07/12/19/08/laptop-1512838_1280.png",
          sub:
            "優れた技術を持つデザイナーたちと、あなた自身が優れたデザイナーとして、最高の物を作り上げましょう。",
          detail:
            "実務経験あり、もしくはデザイン専門学校卒業の方を募集しております。",
          path: "recruit/designer"
        }
      ]
    };
  }
};
</script>
