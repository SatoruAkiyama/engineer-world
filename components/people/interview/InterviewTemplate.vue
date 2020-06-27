<template>
  <div class="grobal-container">
    <div class="interview__title">
      <h1>Interview</h1>
      <p>{{ interview.title }}</p>
    </div>
    <div class="container">
      <div class="interview">
        <h1 class="content-title">
          {{ interview.title }}
          <br />
        </h1>
        <div class="interview__content">
          <div class="name">
            <h3>{{ interview.name }}</h3>
          </div>
          <div class="interview__img">
            <img :src="interview.img" :alt="interview.name" />
          </div>
          <div class="interview__text" v-html="interview.text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["interview"]
};
</script>
