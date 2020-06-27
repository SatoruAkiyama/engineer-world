<template>
  <InterviewTemplate :interview="interview" />
</template>

<script>
import InterviewTemplate from "./InterviewTemplate";

export default {
  data() {
    return {
      interview: {
        title: "社長インタビュー",
        name: "一 十一",
        img:
          "https://www.pakutaso.com/shared/img/thumb/YUSEI_yoyakuhaashita_TP_V.jpg",

        text: `<p>
              こんにちわ！！社長の一 十一です！！
              <br />この会社にいる人全員が人生を楽しんでいる。自信をもってそういえます。だからこそ、よりハイクオリティなモノを作れるのです。
            </p>
            <p>弊社は社員ファーストで経営しております。社員を大事にしています。これはお客様を大事にしていないというわけでは決してありません。</p>
            <p>社員を大事にすることで、社員がどんどんスキルを身に着け、仕事を好きになりより良い物を効率的に作る事が出来るようになります。</p>
            <p>その結果、弊社は沢山のお客様から高い満足度をいただいております。人間は仕事のために生きてるわけではありません。</p>
            <p>これは仕事するなという意味ではありません。仕事をしなくては生きていけません。人間は人生の多くの時間を仕事に使います。</p>
            <p>その仕事が好きで楽しければ人生の多くは好きで楽しいことしてることになりますよね。二回目になりますが、これがお客様の高い満足度につながるのです。</p>
            <p>この最高のメカニズムで弊社は日々楽しく成長しています。</p>
            <p>ざっくりいうと弊社はこんな会社です（笑）</p>`
      }
    };
  },
  components: {
    InterviewTemplate
  }
};
</script>

