<template>
  <InterviewTemplate :interview="interview" />
</template>

<script>
import InterviewTemplate from "./InterviewTemplate";

export default {
  data() {
    return {
      interview: {
        title: "社員インタビュー",
        name: "奈々",

        img:
          "https://cdn.pixabay.com/photo/2016/10/15/05/23/girl-1741941_1280.jpg",
        text: `<p>
              こんにちわ！！デザイナーの奈々です！！
              <br />私はデザイナーとして入社しましたが、この会社ではエンジニアの方と一緒に仕事をすることも多くいつの間にか自分でデザインしたものを作れるようになっちゃいました！
            </p>
            <p>三年目の奈々と申します！私は新卒でデザイナーとして入社しました。</p>
            <p>デザイナーとして働きたく、入社したので、最初はデザイナーの仕事のみをしていました。</p>
            <p>しかし、以前のプロジェクトで一緒になった先輩のフロントエンジニアの人に、コーディングについて教えてもらたのがきっかけで、自分でデザインし、それを自分で作る楽しさを学びました。</p>
            <p>それ以降、デザインを担当し、コーディングまでやらせて頂いています。新たなスキルも身に着けられてとてもラッキーでした。</p>
            <p>今後はデザインをさらに学び、デザインに長けたフロントエンジニアを目指します。</p>
            <p>やりたいことにチャレンジさせてくれる会社で本当に感謝しています。</p>`
      }
    };
  },
  components: {
    InterviewTemplate
  }
};
</script>
