<template>
  <div class="container">
    <input
      type="text"
      v-model="title"
      placeholder="Search for MOvies, Series & more"
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
import axios from 'axios';

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
      const OMDB_API_KEY = '7035c60c';
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&$page=1`);
      console.log(res);
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