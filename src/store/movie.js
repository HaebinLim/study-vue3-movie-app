import axios from 'axios';
import _uniqBy from 'lodash/uniqBy';

export default {
	// module로 사용하겠다는 뜻
	namespaced: true,
	
	// data
	state: () => ({
		movies: [], // 영화 목록
		message: '',
		loading: false,
	}),

	// computed
	getters: {
		/*
		movieIds(state) { // 영화 목록에서 아이디만 추출
			return state.movies.map(m => m.imdbID)
		}
		*/
	},
	
	// methods
	mutations: {
		// 데이터 수정하는 곳
		resetMovies(state){
			state.movies = []
		},
		updateState(state, payload){
			Object.keys(payload).forEach(key => {
				state[key] = payload[key];
			});
		}
	},

	actions: {
		// 데이터 수정 안됨. 비동기 처리하는 곳
	//searchMovies({ state, getters, commit }){
		async searchMovies(context, payload){
			const { title, type, number, year } = payload;
			const OMDB_API_KEY = '7035c60c';
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&$page=1`);
			const { Search, totalResults } = res.data;
			context.commit('updateState', {
				movies: _uniqBy(Search, 'imdbID'),
				message: 'hi',
				loading: true,
			});
			console.log(totalResults);
			console.log(typeof totalResults);

			const total = parseInt(totalResults, 10);
			const pageLength = Math.ceil(total / 10);

			if(pageLength > 1) {
				for (let page = 2; page <= pageLength; page += 1){
					if(page > (number / 10)) break;

					const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&$page=${page}`);
					const { Search } = res.data;
					context.commit('updateState', {
						movies: [
							...context.state.movies, 
							..._uniqBy(Search, 'imdbID')
						],
					})	
				}
			}

		}
	},
}