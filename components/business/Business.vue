<template>
  <div class="grobal-container">
    <div class="business__title">
      <h1>Business</h1>
      <p>事業内容</p>
    </div>
    <div class="container">
      <div class="business">
        <h1 class="content-title">事業内容</h1>
        <div class="business__inner">
          <BusinessBtn />
          <div class="business__content">
            <Preview />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BusinessBtn from "./BusinessBtn";
import Preview from "./Preview";

export default {
  components: {
    BusinessBtn,
    Preview
  }
};
</script>

<style lang="scss" scoped>
.business {
  &__title {
    background-image: url("https://cdn.pixabay.com/photo/2017/02/19/23/09/success-2081168_1280.jpg");
  }

  &__content {
    margin: 100px auto;
    max-width: 800px;
  }
}

@media (min-width: 600px) {
}

@media (min-width: 960px) {
}
</style>
