<template>
  <div class="grobal-container">
    <div class="recruit__title">
      <h1>Recruit</h1>
      <p>募集</p>
    </div>
    <div class="container">
      <div class="recruit">
        <h1 class="content-title">募集</h1>
        <div class="recruit__inner">
          <RecruitBtn />
          <div class="recruit__content">
            <PreviewRecruit />
            <div class="notufication">
              <p class="red">入社後でもスキルに応じて職種変更可能です</p>
              <div class="training">
                <h3>研修</h3>
                <p>
                  新卒の場合ビジネスマナー研修と、職種ごとに約2か月の技術研修があります。その後はメンター付きのOJTという形になります。
                </p>
                <p>
                  中途採用の場合もスキルに応じて研修やOJT制度を取り入れています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewRecruit from "./PreviewRecruit";
import RecruitBtn from "./RecruitBtn";
export default {
  components: {
    PreviewRecruit,
    RecruitBtn
  }
};
</script>

<style lang="scss" scoped>
.recruit {
  &__title {
    background-image: url("https://cdn.pixabay.com/photo/2018/01/19/07/57/shaking-hands-3091906_1280.jpg");
  }
}

.red {
  color: red;
}

.training {
  background: #eae8e8;
  padding: 10px;
  margin-top: 30px;

  & h3 {
    margin-bottom: 20px;
  }
  & p {
    color: #000;
    margin-bottom: 0;
  }
}
</style>
