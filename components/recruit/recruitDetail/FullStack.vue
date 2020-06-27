<template>
  <RecruitDetailTemplate :recruit="recruit" :img="img" :name="name" :skill="skill" />
</template>

<script>
import toContactBtn from "./RecruitToContact";
import RecruitDetailTemplate from "./RecruitDetailTemplate";

export default {
  components: {
    toContactBtn,
    RecruitDetailTemplate
  },
  data() {
    return {
      recruit: [
        { key: "職種", value: "フルスタックエンジニア" },
        {
          key: "応募条件",
          value:
            "フロントエからバックエンドまで扱えるシニアレベルのエンジニアを募集しております。　*実務経験5年以上"
        },
        {
          key: "給与",
          value: "月給70万~90万　*能力に応じて変化します。"
        },
        { key: "賞与", value: "年2回　7月, 3月　2か月分" },
        {
          key: "諸手当",
          value:
            "交通費全額支給、時間外手当全額、MacかWindowsどちらか支給   *選択していただきます。"
        },
        { key: "勤務地", value: "本社" },
        {
          key: "休日休暇",
          value:
            "完全週休2日制（土・日）、祝日年次有給休暇最大30日、リフレッシュ休暇、夏休み5日、年末年始4日 など"
        },
        {
          key: "福利厚生",
          value: "健康保険、厚生年金保険、雇用保険、労災保険など"
        }
      ],
      img:
        "https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png",
      name: "フルスタックエンジニア",
      skill:
        "**Python, Java, JavaScript(Node.js/ TypeScript/ React or Vue)のスキル必須です"
    };
  }
};
</script>
