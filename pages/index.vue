<template>
  <div class="grobal-container">
    <div class="container">
      <div class="home">
        <div class="home__title">
          <h1>Engineer makes World.</h1>
          <p>エンジニアが世界を作ります。</p>
        </div>
        <div class="home__text">
          <p>自分たちが世界に貢献する、世界を作るんだ。そんな思いを持つ人が働いている会社です。</p>
        </div>
      </div>
      <News />
    </div>
  </div>
</template>

<script>
import News from "@/components/news/News";

export default {
  components: {
    News
  }
};
</script>

<style lang="scss" scoped>
.grobal-container {
  background-image: url("https://cdn.pixabay.com/photo/2016/03/25/02/13/abstract-1278077_1280.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation-name: bgColor;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
}

@keyframes bgColor {
  0% {
    background-color: rgba(116, 20, 139, 0.733);
  }
  20% {
    background-color: rgba(103, 112, 24, 0.774);
  }
  40% {
    background-color: rgba(95, 21, 21, 0.671);
  }
  60% {
    background-color: rgba(35, 19, 107, 0.726);
  }
  80% {
    background-color: rgba(22, 97, 45, 0.678);
  }
  100% {
    background-color: rgba(116, 20, 139, 0.733);
  }
}

.container {
  padding-bottom: 100px;
}

.home {
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 100;

  & p {
    margin: 25px;
    font-size: 14px;
  }

  &__title {
    font-size: 25px;
    padding-top: 30%;
  }

  &__text {
    max-width: 100%;
    margin: 0 auto;
    text-align: left;
  }
}

@media (min-width: 600px) {
  .home {
    &__title {
      font-size: 35px;
      padding-top: 25%;
    }

    &__text {
      text-align: center;
    }
  }
}

@media (min-width: 960px) {
  .home {
    &__title {
      font-size: 40px;
      padding-top: 20%;
    }
  }
}
</style>
