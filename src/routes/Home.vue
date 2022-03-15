<template>
  <Headline />
  <Search />
  <MovieList />
</template>

<script>
import Headline from '~/components/Headline';
import Search from '~/components/Search';
import MovieList from '~/components/MovieList';

export default {
  components: {
    Headline,
    Search,
    MovieList,
  },
  created() {
    // 홈으로 올때마다 영화목록 초기화
    this.$store.commit('movie/resetMovies');
  }
}
</script>