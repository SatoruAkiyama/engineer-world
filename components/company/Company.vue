<template>
  <div class="grobal-container">
    <div class="company__title">
      <h1>Company</h1>
      <p>会社について</p>
    </div>
    <div class="container">
      <div class="company">
        <h1 class="content-title">会社概要</h1>
        <div class="company__inner">
          <div class="company__table">
            <div
              class="company__info"
              v-for="(c, index) in company"
              :key="index"
            >
              <div class="key">
                <div class="company__info__text">
                  <span>{{ c.key }}</span>
                </div>
              </div>
              <div class="value">
                <div class="company__info__text">
                  <span>{{ c.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="company">
        <h1 class="content-title">経営理念</h1>
        <div class="company__inner">
          <div class="mission">
            <div class="mission__text">
              <ul>
                <li v-for="(m, index) in mission" :key="index">
                  <h3>{{ m.key }}</h3>
                  <p>
                    {{ m.value }}
                  </p>
                </li>
              </ul>
              <div class="nostress">
                <h2>Not Stress But Success.</h2>
              </div>
            </div>
            <div class="mission__img">
              <img
                src="https://cdn.pixabay.com/photo/2016/01/19/08/43/town-sign-1148092_1280.jpg"
                height="300px"
                width="280px"
              />
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
      company: [
        { key: "会社名", value: "Engeneer World" },
        { key: "設立年月日", value: "20××年〇〇月△△日" },
        { key: "代表", value: "一 十一" },
        { key: "資本金", value: "30000000億円" },
        { key: "本社", value: "東京都〇〇区××町00000 ****ビル　200階" },
        { key: "事業所数", value: "国内50カ所／海外50カ所（30カ国・地域)" },
        { key: "社員数", value: "500人" },
        {
          key: "事業内容",
          value:
            "幅広いエンジニアリングを行っております。アプリケーション開発、UI/UX/デザイン、ホームページ制作、AI/IoTなどを行っています。"
        }
      ],
      mission: [
        {
          key: "1. 仕事は楽しくして好きになろう。",
          value:
            "仕事をしなくちゃいけないからやるという考えを捨てて、好きなことをやってる感覚で働こう。"
        },
        {
          key: "2. 積極的に取り組む、自分から動く。",
          value: "受け身でいるより、とりあえずやってみるという気持ちを持とう。"
        },
        {
          key: "3. 自分を大切に、お客様に最高のプロダクトを。",
          value: "自分、家族、友人、お客様、全てに感謝の気持ちを持とう。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.company {
  &__title {
    background-image: url("https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg");
  }
}

.mission {
  background: #eae8e8;
  padding: 20px;

  &__img {
    text-align: center;
  }

  & h3 {
    margin: 10px;
  }

  & p {
    margin: 10px;
  }

  & .nostress {
    margin: 50px 0 20px 0;
    text-align: center;
  }
}
</style>
