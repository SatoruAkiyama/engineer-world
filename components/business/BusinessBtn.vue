<template>
  <div class="business-btn">
    <div class="business__fields">
      <div class="business__field" v-for="(field, index) in fields" :key="index">
        <div class="btn">
          <a @click="hoge(field.href)">
            <button>
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
        { href: "application", name: "アプリケーション開発" },
        { href: "ui-ux-design", name: "UI/UX/デザイン" },
        { href: "homepage", name: "ホームページ制作" },
        { href: "ai-iot", name: "AI/IoT開発" }
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
