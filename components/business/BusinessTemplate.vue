<template>
  <div class="grobal-container">
    <div class="production__title" :style="{backgroundImage: 'url(' + bgUrl + ')'}">
      <h1>{{ title }}</h1>
    </div>
    <div class="container">
      <div class="production">
        <h1 class="content-title">{{ title }}</h1>
        <div class="field__inner" v-for="(app, index) in apps" :key="index">
          <div class="field__img">
            <img :src="app.img" />
            <div class="field__title">
              <h1>{{ app.name }}</h1>
            </div>
          </div>
          <div class="field__text">
            <div class="field__sub">
              <h4>{{ app.sub }}</h4>
            </div>
            <div class="field__detail">
              <p>{{ app.detail }}</p>
            </div>
            <div class="field__more">
              <div class="btn">
                <a :href="app.url">
                  <button>
                    サイトへ
                    <span class="material-icons">navigate_next</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["apps", "title", "bgUrl"]
};
</script>


