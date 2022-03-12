<template>
  <div class="container">
    <div
      :class="['inner', { 'no-result' : !movies.length }]">
      <Loader v-if="loading" />
      <div
        v-if="message"
        class="message">
        {{ message }}
      </div>
      <div
        v-else
        class="movies">
        <MovieItem
          v-for="item in movies"
          :key="item.imdbID"
          :movie="item" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'
import Loader from '~/components/Loader'

export default {
  components: {
    MovieItem,
    Loader
  },
  computed: {
    // movies는 처음 빈 배열이고, searchMovies에서 갱신이 된 후 반응성이 유지된 상태로? 활용되기 때문에? computed에 정의한다 @.@ 
    movies() {
      return this.$store.state.movie.movies
    },
    message() {
      return this.$store.state.movie.message
    },
    loading() {
      return this.$store.state.movie.loading
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.container {
  margin-top: 30px;
  .inner {
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
    background-color: $gray-200;
    &.no-result {
      padding: 70px 0 60px;
    }
  }
  .message {
    margin-top: 10px;
    color: $gray-400;
    font-size: 20px;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>