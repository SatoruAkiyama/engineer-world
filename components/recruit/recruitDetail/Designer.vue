<template>
  <div class="grobal-container">
    <div class="recruit__title">
      <h1>Recruit</h1>
      <p>{{ name }}</p>
    </div>
    <div class="container">
      <div class="recruit">
        <h1 class="content-title">{{ name }} <br /></h1>
        <p>{{ skill }}</p>
        <div class="recruit__content">
          <div class="recruit__img">
            <img :src="img" />
          </div>
          <div class="recruit__text">
            <div class="recruit__table">
              <div
                class="recruit__info"
                v-for="(r, index) in recruit"
                :key="index"
              >
                <div class="key">
                  <div class="recruit__info__text">
                    <span>{{ r.key }}</span>
                  </div>
                </div>
                <div class="value">
                  <div class="recruit__info__text">
                    <span>{{ r.value }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <toContactBtn />
  </div>
</template>

<script>
import toContactBtn from "./RecruitToContact";

export default {
  components: {
    toContactBtn
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
