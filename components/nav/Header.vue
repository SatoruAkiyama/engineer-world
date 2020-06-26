<template>
  <header id="header" class="header">
    <div class="header__inner">
      <div class="header__logo">
        <span>
          <nuxt-link to="/">Enginner World</nuxt-link>
        </span>
      </div>
      <div class="header__nav">
        <ul class="nav__ul">
          <li class="nav__ul__li">
            <nuxt-link to="/company">
              <span>Company</span>
              <br />
              <span>会社について</span>
            </nuxt-link>
          </li>
          <li class="nav__ul__li">
            <nuxt-link to="/business">
              <span>Business</span>
              <br />
              <span>事業内容</span>
            </nuxt-link>
          </li>
          <li class="nav__ul__li">
            <nuxt-link to="/people">
              <span>People</span>
              <br />
              <span>働く人々</span>
            </nuxt-link>
          </li>
          <li class="nav__ul__li">
            <nuxt-link to="/recruit">
              <span>Recruit</span>
              <br />
              <span>募集</span>
            </nuxt-link>
          </li>
          <li class="nav__ul__li">
            <nuxt-link to="/contact">
              <span>Contact</span>
              <br />
              <span>お問い合わせ</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <button class="menu__btn" :class="{ 'menu-open': show }" @click="mobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <MobileMenu :show="show" @mobileMenuOpen="mobileMenu" />
  </header>
</template>

<script>
import MobileMenu from "./MobileMenu";

export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    MobileMenu
  },
  methods: {
    mobileMenu() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: #000;
  transition: all 0.3s;

  &:hover {
    color: rgb(111, 134, 182);
  }
}

.nuxt-link-exact-active {
  color: rgb(58, 66, 172);
}

.header {
  background: #f1f1f1d8;
  width: 100%;
  position: relative;
  z-index: 9000;

  &__logo {
    & a {
      display: inline-block;
      font-size: 25px;
    }
  }

  &__nav {
    position: relative;
    display: none;
    align-items: right;

    & ul {
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      list-style: none;

      & li {
        margin-left: 40px;

        & span:nth-child(1) {
          font-weight: bold;
          font-size: 17px;
        }

        & span:nth-child(2) {
          font-weight: lighter;
          font-size: 12px;
        }

        & a {
          text-transform: uppercase;
        }
      }
    }
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
}

.menu__btn {
  background-color: unset;
  border: none;
  outline: none !important;
  cursor: pointer;
  z-index: 2000;

  & > span {
    background-color: #000;
    width: 30px;
    height: 2px;
    display: block;
    margin-bottom: 9px;
    transition: transform 0.7s;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &.menu-open {
    & > span {
      background-color: rgb(88, 212, 212);

      &:nth-child(1) {
        transition-delay: 70ms;
        transform: translateY(11px) rotate(135deg);
      }
      &:nth-child(2) {
        transition-delay: 0s;
        transform: translateX(-18px) scaleX(0);
      }
      &:nth-child(3) {
        transition-delay: 140ms;
        transform: translateY(-11px) rotate(-135deg);
      }
    }
  }
}

@media (min-width: 960px) {
  .header {
    height: 90px;

    &__nav {
      display: block;
    }

    &__inner {
      padding: 20px;
    }
  }

  .menu__btn {
    display: none;
  }

  .mobile-menu {
    display: none;
  }
}
</style>
