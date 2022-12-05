import axios from 'axios';
import _uniqBy from 'lodash/uniqBy';

const _defaultMessage = 'Search for the movie title!';

export default {
	// module로 사용하겠다는 뜻
	namespaced: true,

	// data
	state: () => ({
		movies: [], // 영화 목록
		message: _defaultMessage,
		loading: false,
		theMovie: {},
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
		resetMovies(state) {
			state.movies = [];
			state.message = _defaultMessage;
			state.loading = false;
		},
		updateState(state, payload) {
			Object.keys(payload).forEach(key => {
				state[key] = payload[key];
			});
		}
	},

	actions: {
		// 데이터 수정 안됨. 비동기 처리하는 곳
		//searchMovies({ state, getters, commit }){
		async searchMovies(context, payload) {
			if (context.state.loading) return

			context.commit('updateState', {
				message: '',
				loading: true,
			})
			try {
				const res = await _fetchMovie({
					...payload,
					page: 1
				});
				const { Search, totalResults } = res.data;
				context.commit('updateState', {
					movies: _uniqBy(Search, 'imdbID'),
				});
				console.log(totalResults);
				console.log(typeof totalResults);

				const total = parseInt(totalResults, 10);
				const pageLength = Math.ceil(total / 10);

				if (pageLength > 1) {
					for (let page = 2; page <= pageLength; page += 1) {
						if (page > (payload.number / 10)) break;

						const res = await _fetchMovie({
							...payload,
							page
						});
						const { Search } = res.data;
						context.commit('updateState', {
							movies: [
								...context.state.movies,
								..._uniqBy(Search, 'imdbID')
							],
						})
					}
				}
			} catch ({ message }) {
				context.commit('updateState', {
					movies: [],
					message
				})
			} finally {
				context.commit('updateState', {
					loading: false,
				})
			}
		},

		async searchMovieWithId({ state, commit }, payload) {
			if (state.loading) return

			commit('updateState', {
				theMovie: {},
				loading: true
			})

			try {
				const res = await _fetchMovie(payload);
				console.log(res.data);
				commit('updateState', {
					theMovie: res.data,
				});
			} catch (error) {
				commit('updateState', {
					theMovie: {},
				});
			} finally {
				commit('updateState', {
					loading: false,
				})
			}
		},
	},
}

// _ 현재 파일에서만 사용한다는 뜻?
async function _fetchMovie(payload) {
	return await axios.post('/.netlify/functions/movie', payload)
}