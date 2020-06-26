<template>
  <div class="recruit-btn">
    <div class="recruit__fields">
      <div class="recruit__field" v-for="(field, index) in fields" :key="index">
        <div class="btn">
          <a @click="hoge(field.href)">
            <button style="fontSize: 14px">
              {{ field.name }}
              <span class="material-icons">keyboard_arrow_down</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { href: "full-stack", name: "フルスタックエンジニア" },
        { href: "back-end", name: "バックエンドエンジニア" },
        { href: "front", name: "フロントエンジニア" },
        { href: "designer", name: "デザイナー" }
      ]
    };
  },
  methods: {
    hoge(href) {
      return this.scroll(href);
    }
  }
};
</script>
