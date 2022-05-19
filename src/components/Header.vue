<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <router-link
          :to="nav.href"
          active-class="active"
          :class="['nav-link', { active: isMatch(nav.path) }]">
          {{ nav.name }}
        </router-link>
      </div>
    </div>
    <div
      class="user"
      @click="toAbout">
      <img
        :src="image"
        :alt="name" />
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import Logo from "~/components/Logo";
export default {
  data() {
    return {
      navigations: [
        {
          name : 'Search',
          href: '/',
        },
        {
          name : 'Movie',
          href: '/movie/tt4520988',
          path: /^\/movie/,  // /movie로 시작하는
        },
        {
          name : 'About',
          href: '/about',
        }
      ]
    }
  },
  components: {
    Logo,
  },
  computed: {
    ...mapState('about', ['image', 'name'])
  },
  methods: {
    isMatch(path) {
      if(!path) return false
      console.log(this.$route)
      return path.test(this.$route.fullPath)
    },
    toAbout() {
      this.$router.push('/about');
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  position: relative;
  height: 70px;
  padding: 0 40px;
  .logo {
    margin-right: 40px;
    text-decoration: none;
  }
  .user {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid $gray-200;
    background-color: $gray-200;
    transition: .4s;
    img {
      width: 100%;
    }
    &:hover {
      border-color: $primary;
    }
  }
  @include media-breakpoint-down(sm) {
    .nav { 
      display: none; 
    }
  }
}
</style>
