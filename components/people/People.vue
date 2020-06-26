<template>
  <div class="grobal-container">
    <div class="people__title">
      <h1>People</h1>
      <p>働く人々</p>
    </div>
    <div class="container">
      <div class="people">
        <h1 class="content-title">働く人々</h1>
        <div class="content">
          <div class="img">
            <img src="https://cdn.pixabay.com/photo/2016/06/13/09/57/meeting-1453895__340.png" alt />
          </div>
          <div class="text">
            <p>
              社員、お客様がそろって口にする言葉は、この会社ってほかの会社と全然違う。もちろん良い意味で違う。この会社では欧米の働き方を取り入れています。
              <br />メリハリを意識しています。働くときは働く。休む時は休む。メリハリを持つことで仕事効率を上げ、少ない時間で良い物を作ります。
            </p>
          </div>
        </div>
        <PreviewInterview />
      </div>
    </div>
  </div>
</template>

<script>
import PreviewInterview from "./PreviewInterview";

export default {
  components: {
    PreviewInterview
  }
};
</script>

<style lang="scss" scoped>
.people {
  &__title {
    background-image: url("https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg");
  }

  & .content {
    background: #eae8e8;
    padding: 15px;

    & .img {
      padding: 10px;
    }

    & .text {
      padding: 20px;
    }
  }
}

@media (min-width: 960px) {
  .content {
    display: flex;
    justify-content: center;
    align-items: center;

    & .img {
      width: 45%;
    }

    & .text {
      width: 45%;
    }
  }
}
</style>