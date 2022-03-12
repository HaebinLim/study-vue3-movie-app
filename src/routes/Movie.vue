<template>
  <div class="container">
    <div class="skeletons">
      <div class="skeleton poster">
      </div>
      <div class="specs">
        <div class="skeleton title"></div>
        <div class="skeleton spec"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
    </div>
    <Loader
      :size="3"
      :z-index="9"
      fixed />
  </div>
</template>

<script>
import Loader from '~/components/Loader'

export default {
  components: {
    Loader
  },
  created() {
    console.log(this.$route)
    this.$store.dispatch('movie/searchMovieWithId', {
      id: this.$route.params.id
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/main';

.container {
  padding-top: 40px;
}
.skeletons {
  display: flex;
  .poster {
    flex-shrink: 0;
    width: 500px;
    height: 500px * 3 / 2;
    margin-right: 70px;
  }
  .specs {
    flex-grow: 1;
  }
  .skeleton {
    margin-top: 20px;
    border-radius: 10px;
    background: $gray-200;
    &.poster {
      margin-top: 0;
    }
    &.title {
      margin-top: 0;
      width: 80%;
      height: 70px;
    }
    &.spec {
      width: 60%;
      height: 30px;
    }
    &.plot {
      width: 100%;
      height: 250px;
    }
    &.etc {
      width: 50%;
      height: 50px;
    }
  }
}
</style>