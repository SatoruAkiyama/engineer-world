<template>
  <div class="input">
    <div class="input__inner">
      <form>
        <div class="input__each">
          <label for="kind">
            <p>お問い合わせ種別</p>
          </label>
          <select
            id="kind"
            class="form-area"
            :value="form.kind"
            @change="$emit('kind', $event.target.value)"
          >
            <option value="仕事依頼">仕事依頼</option>
            <option value="採用について">採用について</option>
            <option value="その他">その他</option>
          </select>
        </div>
        <div class="input__each">
          <label for="name">
            <p>お名前</p>
          </label>
          <input
            type="text"
            id="name"
            class="form-area"
            :value="form.name"
            @input="$emit('name', $event.target.value)"
          />
        </div>
        <div class="input__each">
          <label for="name_furigana">
            <p>フリガナ</p>
          </label>
          <input
            type="text"
            id="name_furigana"
            class="form-area"
            :value="form.ruby"
            @input="$emit('ruby', $event.target.value)"
          />
        </div>
        <div class="input__each">
          <label for="company-school">
            <p>会社名/学校名</p>
          </label>
          <input
            type="text"
            id="company-school"
            class="form-area"
            :value="form.companySchool"
            @input="$emit('companySchool', $event.target.value)"
          />
        </div>
        <div class="input__each">
          <label for="phone">
            <p>電話番号</p>
          </label>
          <input
            type="numaber"
            id="phone"
            class="form-area"
            :value="form.phone"
            @input="$emit('phone', $event.target.value)"
          />
        </div>
        <div class="input__each">
          <label for="mail">
            <p>メールアドレス</p>
          </label>
          <input
            type="mail"
            id="mail"
            class="form-area"
            :value="form.mail"
            @input="$emit('mail', $event.target.value)"
          />
        </div>
        <div class="input__each">
          <label for="content">
            <p>お問い合わせ内容</p>
          </label>
          <textarea
            id="content"
            class="form-area"
            :value="form.content"
            @input="$emit('content', $event.target.value)"
          ></textarea>
        </div>
        <div class="feedback">
          <p v-if="feedback">空欄もしくは正しくない箇所があります。</p>
        </div>
        <div class="btn">
          <button @click.prevent="toConfirm">
            送信内容を確認
            <span class="material-icons">navigate_next</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["form"],
  data() {
    return {
      feedback: false
    };
  },
  methods: {
    toConfirm() {
      if (
        this.form.kind == null ||
        this.form.name == "" ||
        this.form.ruby == "" ||
        this.form.companySchool == "" ||
        this.form.phone == "" ||
        this.form.mail == "" ||
        this.form.content == null
      ) {
        this.feedback = true;
      } else {
        this.feedback = false;
        this.$emit("toConfirm");
      }
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

.input {
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

  & p {
    margin-bottom: 10px;
  }

  & textarea {
    width: 100%;
    height: 200px;
  }

  & .form-area {
    border: 1px solid #fff;

    &:hover,
    &:focus {
      border: rgb(179, 142, 142) 1px solid;
    }
  }
}
</style>