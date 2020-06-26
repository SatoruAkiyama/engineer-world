<template>
  <div class="submitted">
    <div class="submitted__inner">
      <h1>お問い合わせありがとうございました。</h1>
      <p>
        二～三営業日以内に、
        担当よりメールにて返信させていただきます
      </p>
    </div>
    <div class="btn">
      <button @click.prevent="clear">
        お問い合わせTOPへ
        <span class="material-icons">navigate_next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clear() {
      this.$emit("clear");
    }
  }
};
</script>

<style lang="scss" scoped>
.submitted__inner {
  max-width: 600px;
  margin: 30px auto;
}

h1 {
  font-size: 20px;
  margin-bottom: 20px;
}

@media (min-width: 600px) {
  h1 {
    font-size: 27px;
  }
}

@media (min-width: 960px) {
  h1 {
    font-size: 30px;
  }
}
</style>
