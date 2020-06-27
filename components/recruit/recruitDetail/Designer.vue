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
        { key: "職種", value: "デザイナー" },
        {
          key: "応募条件",
          value:
            "実務経験あり、もしくはデザイン専門学校卒業の方を募集しております。"
        },
        {
          key: "給与",
          value: "月給30万~60万　*能力に応じて変化します。"
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
        "https://cdn.pixabay.com/photo/2016/07/12/19/08/laptop-1512838_1280.png",
      name: "デザイナー",
      skill: "**HTML/ CSS(SCSS)/　jQuery or Vue or React などの知識大歓迎。 "
    };
  }
};
</script>
