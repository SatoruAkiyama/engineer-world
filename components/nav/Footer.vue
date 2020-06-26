<template>
  <div class="footer">
    <div class="topBtn" @click="top">Page Top</div>
    <footer>
      <div class="footer__inner">
        <div class="footer__title">&copy;Enginner World</div>
        <p>
          Fictional corporate site. It's practice to improve my skill of
          Nuxt.js.
          <br />
          <br />架空の会社です。NUXT
          JSをつっかたWebページ作りの練習とコーポレートサイト作りの練習を兼ねています。
        </p>
        <div class="link">
          <a href="https://satoruakiyama.com">&copy;Satoru Akiyama</a>
          <a href="https://github.com/SatoruAkiyama/engineer-world">&nbsp; &nbsp;Github</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src:
            "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
        }
      ]
    };
  },
  methods: {
    top() {
      $("html, body").animate({ scrollTop: 0 }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background: #000;
  color: #fff;

  &__title {
    font-size: 20px;
    margin: 15px 0;
  }

  &__inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4%;
  }

  & .link {
    margin-top: 15px;
    text-align: right;
  }

  & a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: rgb(126, 151, 206);
    }
  }
}
.topBtn {
  text-align: center;
  padding: 20px;
  background: #555555;
  transition: all 0.3s;
  cursor: pointer;
  border-top: rgb(201, 201, 201) 3px solid;
  border-bottom: rgb(201, 201, 201) 3px solid;

  &:hover {
    background: rgb(64, 44, 153);
    color: rgb(255, 255, 255);
  }
}

@media (min-width: 960px) {
}
</style>
