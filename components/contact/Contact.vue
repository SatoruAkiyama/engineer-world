<template>
  <div class="grobal-container">
    <div class="contact__title">
      <h1>Contact</h1>
      <p>お問い合わせ</p>
    </div>
    <div class="container">
      <div class="contact">
        <h1 class="content-title">お問い合わせ</h1>
        <div class="contact__inner">
          <div class="procedure">
            <span :class="{'red': input}">1.入力</span>
            <span :class="{'red': confirm}">2.確認</span>
            <span :class="{'red': done}">3.完了</span>
          </div>
          <transition name="page" mode="out-in">
            <Input
              :form="form"
              @name="name($event)"
              @ruby="ruby($event)"
              @companySchool="companySchool($event)"
              @phone="phone($event)"
              @mail="mail($event)"
              @content="content($event)"
              @kind="kind($event)"
              @toConfirm="toConfirm"
              v-if="input"
            />
            <Confirm :form="form" @toInput="toInput" @submit="submit" v-else-if="confirm" />
            <Submitted :form="form" v-else @clear="clear"></Submitted>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "./Input";
import Confirm from "./Confirm";
import Submitted from "./Submitted";

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
  data() {
    return {
      form: {
        kind: "仕事依頼",
        name: "",
        ruby: "",
        companySchool: "",
        phone: "",
        mail: "",
        content: ""
      },
      input: true,
      confirm: false,
      done: false
    };
  },
  components: {
    Input,
    Confirm,
    Submitted
  },
  methods: {
    name(e) {
      this.form.name = e;
    },
    ruby(e) {
      this.form.ruby = e;
    },
    companySchool(e) {
      this.form.companySchool = e;
    },
    phone(e) {
      this.form.phone = e;
    },
    mail(e) {
      this.form.mail = e;
    },
    content(e) {
      this.form.content = e;
    },
    kind(e) {
      this.form.kind = e;
    },
    toConfirm() {
      this.input = false;
      this.confirm = true;
      $("html, body").animate({ scrollTop: 200 + "px" }, 500);
    },
    toInput() {
      this.input = true;
      this.confirm = false;
      $("html, body").animate({ scrollTop: 200 + "px" }, 500);
    },
    submit() {
      this.input = false;
      this.confirm = false;
      this.done = true;
      $("html, body").animate({ scrollTop: 0 }, 500);
    },
    clear() {
      this.input = true;
      this.confirm = false;
      this.done = false;
      this.form.name = null;
      this.form.ruby = null;
      this.form.companySchool = null;
      this.form.phone = null;
      this.form.mail = null;
      this.form.content = null;
      this.form.kind = "仕事依頼";
      $("html, body").animate({ scrollTop: 0 }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  &__title {
    background-image: url("https://cdn.pixabay.com/photo/2017/11/17/09/37/businessman-2956974_1280.jpg");
  }
}

.procedure {
  text-align: center;
}

span {
  margin-left: 15px;
}

.red {
  color: red;
}

@media (min-width: 600px) {
}

@media (min-width: 960px) {
}
</style>
