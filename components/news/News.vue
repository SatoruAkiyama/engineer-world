<template>
  <div class="news">
    <h1>News</h1>
    <div class="news__inner">
      <p v-for="(n, index) in news" :key="index">
        {{ n.day }}
        <br />
        {{ n.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          day: "2020/06/22",
          text:
            "完成しました。デプロイします。思ったよりも時間がかかりました。特に予想外にCSSに時間を使ってしまいました。サーバーとのやり取りはして居ませんがNUXTJSについてかなり多く学ぶ事が出来ました。"
        },
        {
          day: "2020/06/21",
          text:
            "今日は、Business,People,Recruitのページを作りました。明日、全て作り終える予定です。"
        },
        {
          day: "2020/06/20",
          text:
            "今日からこのサイトを作り始めました。Nuxtを使って静的サイトを作っていきます。Nuxtの理解を深めたいと思っています。またコーポレートサイトを作る練習も兼ねています。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.news {
  margin: 120px 0 0 0;
  padding: 20px;
  background: #dbdbdb5e;
  border: 2px solid #fff;
  position: relative;
  z-index: 100;
  color: #fff;

  &__inner {
    max-width: 100%;
    margin: 0 auto;
    text-align: left;
  }

  & p {
    margin-bottom: 15px;
  }
}
</style>