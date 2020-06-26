<template>
  <transition name="slide">
    <nav class="mobile-menu" :class="{ 'menu-open': show }" v-if="show">
      <div class="mobile-menu__inner">
        <div class="logo" @click="close">
          <nuxt-link to="/">Engineer World</nuxt-link>
        </div>
        <ul class="mobile-menu__main">
          <li class="mobile-menu__item" @click="close">
            <nuxt-link to="/company">
              Company
              <br />会社について
            </nuxt-link>
          </li>
          <li class="mobile-menu__item" @click="close">
            <nuxt-link to="/business">
              Business
              <br />事業内容
            </nuxt-link>
          </li>
          <li class="mobile-menu__item" @click="close">
            <nuxt-link to="/people">
              People
              <br />働く人々
            </nuxt-link>
          </li>
          <li class="mobile-menu__item" @click="close">
            <nuxt-link to="/recruit">
              Recruit
              <br />募集
            </nuxt-link>
          </li>
          <li class="mobile-menu__item" @click="close">
            <nuxt-link to="/contact">
              Contact
              <br />お問い合わせ
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  props: ["show"],
  methods: {
    close() {
      this.$emit("mobileMenuOpen");
    }
  }
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  background: #ececec;
  display: none;
  z-index: 1000;

  &.menu-open {
    display: block;
  }

  & .logo {
    text-align: center;
    margin-top: 60px;
    font-size: 25px;
  }

  &__item {
    list-style: none;
    display: block;
    margin: 0 auto;
    padding: 10px;
    text-align: center;

    &:nth-child(1) {
      padding-top: 40px;
    }
  }

  & a {
    color: #000;
    transition: all 0.3s;

    &:hover {
      color: rgb(111, 134, 182);
    }
  }
}

.nuxt-link-exact-active {
  color: rgb(58, 149, 172);
}
</style>
