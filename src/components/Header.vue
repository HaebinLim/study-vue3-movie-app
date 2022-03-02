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
          class="nav-link">
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
          href: '/movie',
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
  }
}
</style>
