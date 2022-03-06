<template>
  <div class="container">
    <div class="inner">
      <MovieItem
        v-for="item in movies"
        :key="item.imdbID"
        :movie="item" />
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'

export default {
  components: {
    MovieItem,
  },
  computed: {
    // movies는 처음 빈 배열이고, searchMovies에서 갱신이 된 후 반응성이 유지된 상태로? 활용되기 때문에? computed에 정의한다 @.@ 
    movies() {
      return this.$store.state.movie.movies
    }
  },
}
</script>
