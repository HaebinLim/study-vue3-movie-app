<template>
  <div class="container">
    <input
      type="text"
      v-model="title"
      placeholder="Search for Movies, Series & more"
      class="form-control"
      @keyup.enter="apply" />
    <div class="selects">
      <select
        class="form-select"
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name">
        <option
          v-if="filter.name === 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      type="button"
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
          name: 'type',
          items: ['movie', 'series', 'episode']
        },
        {
          name: 'number',
          items: [10, 20, 30]
        },
        {
          name: 'year',
          items: (() => {
            const years = [];
            const thisYear = new Date().getFullYear();
            for(let i = thisYear; i >= 1985; i-= 1) {
              years.push(i);
            }
            return years;
          })()
        },
      ]
    }
  },
  methods: {
    async apply(){
      this.$store.dispatch('movie/searchMovies', {
        title: this.title,
        type: this.type,
        number: this.number,
        year: this.year,
      })
      // store의 mutations를 실행할 때는 .commit()
      // actions를 실행할 때는 .dispatch(모듈에등록한이름/메소드)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 0 10px;
  .selects {
    display: flex;
    gap: 0 10px;
    select {
      width: 120px;
    }
  }
  .btn {
    flex-shrink: 0;
    width: 120px;
    height: 50px;
    font-weight: bold;
  }
}
</style>