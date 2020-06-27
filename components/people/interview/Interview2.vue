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
        name: "John",
        img:
          "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg",
        text: `<p>
              こんにちわ！！アメリカ出身のJohnです！！
              <br />私が伝えたいことはこの会社で働くことは本当に楽しいということです。一緒にスキルを高めましょう！
            </p>
            <p>この会社は本当に社員を大事にしてくれる会社です。皆が友達です。皆が教えあい協力し時には競争し、一緒に成長しています。</p>
            <p>私は、この会社に入り沢山のことを学びました。技術的なスキルも言語能力もこの会社で沢山学びました。</p>
            <p>やりたいプロジェクトに参加させてもらえることが多いし、仕事の面で至らないところは何一つありません。</p>
            <p>それでいてこの会社、ワ－クライフバランスも最高なんです。</p>
            <p>先日10連休を頂き妻と娘とハワイ旅行へいてきました。</p>
            <p>Engineer World 最高です。</p>`
      }
    };
  },
  components: {
    InterviewTemplate
  }
};
</script>
