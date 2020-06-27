<template>
  <div class="grobal-container">
    <div class="recruit__title">
      <h1>Recruit</h1>
      <p>{{ name }}</p>
    </div>
    <div class="container">
      <div class="recruit">
        <h1 class="content-title">
          {{ name }}
          <br />
        </h1>
        <p>{{ skill }}</p>
        <div class="recruit__content">
          <div class="recruit__img">
            <img :src="img" />
          </div>
          <div class="recruit__text">
            <div class="recruit__table">
              <div class="recruit__info" v-for="(r, index) in recruit" :key="index">
                <div class="key">
                  <div class="recruit__info__text">
                    <span>{{ r.key }}</span>
                  </div>
                </div>
                <div class="value">
                  <div class="recruit__info__text">
                    <span>{{ r.value }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <toContactBtn />
  </div>
</template>

<script>
import toContactBtn from "./RecruitToContact";

export default {
  components: {
    toContactBtn
  },
  props: ["recruit", "img", "name", "skill"]
};
</script>
