<template>
  <div class="confirm">
    <div class="confirm__inner">
      <div class="confirm__each">
        <h3>お問い合わせ種別</h3>
        <div class="answer">
          <p>{{ form.kind }}</p>
        </div>
      </div>
      <div class="confirm__each">
        <h3>お名前</h3>
        <div class="answer">
          <p>{{ form.name }}</p>
        </div>
      </div>
      <div class="confirm__each">
        <h3>フリガナ</h3>
        <div class="answer">
          <p>{{ form.ruby }}</p>
        </div>
      </div>
      <div class="confirm__each">
        <h3>会社名/学校名</h3>
        <div class="answer">
          <p>{{ form.companySchool }}</p>
        </div>
      </div>
      <div class="confirm__each">
        <h3>電話番号</h3>
        <div class="answer">
          <p>{{ form.phone }}</p>
        </div>
      </div>
      <div class="confirm__each">
        <h3>メールアドレス</h3>
        <div class="answer">
          <p>{{ form.mail }}</p>
        </div>
      </div>
      <div class="confirm__each">
        <h3>お問い合わせ内容</h3>
        <div class="answer">
          <p>{{ form.content }}</p>
        </div>
      </div>
      <div class="btn">
        <button @click.prevent="toInput">
          入力画面へ
          <span class="material-icons">keyboard_arrow_down</span>
        </button>
      </div>
      <div class="btn">
        <button @click.prevent="submit">
          送信&nbsp;&nbsp;
          <span class="material-icons">send</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["form"],
  methods: {
    toInput() {
      this.$emit("toInput");
    },
    submit() {
      this.$emit("submit");
    }
  }
};
</script>

<style lang="scss" scoped>
.form-area {
  padding: 10px;
  background: #fff;
}
.feedback {
  color: red;
  text-align: center;
}

.confirm {
  background: #eae8e8;
  padding: 10px;
  margin-top: 20px;

  &__inner {
    max-width: 550px;
    margin: 0 auto;
  }

  &__each {
    margin: 30px 0;
  }

  & h3 {
    margin-bottom: 10px;
  }

  & .answer {
    background: #fff;
    padding: 10px;

    & p {
      word-wrap: break-word;
    }
  }
}
</style>