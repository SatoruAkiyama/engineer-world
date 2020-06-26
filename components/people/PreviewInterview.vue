<template>
  <div class="interview">
    <h1 class="content-title">社員インタビュー</h1>
    <div class="field__inner interviews" v-for="(person, index) in people" :key="index">
      <div class="field__img">
        <img :src="person.img" />
      </div>
      <div class="field__text">
        <div class="field__name">
          <h1>{{ person.name }}</h1>
        </div>
        <div class="field__sub">
          <h4>{{ person.sub }}</h4>
        </div>
        <div class="field__detail">
          <p>{{ person.detail }}</p>
        </div>
        <div class="field__more">
          <div class="btn">
            <nuxt-link :to="person.path">
              <button>
                もっと読む
                <span class="material-icons">navigate_next</span>
              </button>
            </nuxt-link>
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
      people: [
        {
          name: "一 十一",
          img:
            "https://pakutaso.cdn.rabify.me/shared/img/thumb/YUSEI_yoyakuhaashita.jpg.webp?d=500",
          path: "/people/interview",
          sub: "こんにちわ！！社長の一十一です！！",
          detail:
            "この会社にいる人全員が人生を楽しんでいる。自信をもってそういえます。だからこそ、よりハイクオリティなモノを作れるのです。"
        },
        {
          name: "John",
          img:
            "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg",
          path: "/people/interview2",
          sub: "こんにちわ！！アメリカ出身のJohnです！！",
          detail:
            "私が伝えたいことはこの会社で働くことは本当に楽しいということです。一緒にスキルを高めましょう！"
        },
        {
          name: "Nana",
          img:
            "https://cdn.pixabay.com/photo/2016/10/15/05/23/girl-1741941__340.jpg",
          path: "/people/interview3",
          sub: "こんにちわ、デザイナーの奈々です！！",
          detail:
            "私はデザイナーとして入社しましたが、この会社ではエンジニアの方と一緒に仕事をすることも多くいつの間にか自分でデザインしたものを作れるようになっちゃいました！（笑）"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.field__inner.interviews {
  margin-top: 20px;
}

.interview {
  margin-top: 90px;
}
</style>
