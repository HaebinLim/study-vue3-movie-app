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
  </header>
</template>

<script>
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
  methods: {
    isMatch(path) {
      if(!path) return false
      console.log(this.$route);
      return path.test(this.$route.fullPath)
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 40px;
  .logo {
    margin-right: 40px;
    text-decoration: none;
  }
}
</style>
