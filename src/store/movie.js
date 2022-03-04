export default {
	// module로 사용하겠다는 뜻
	namespaced: true,
	
	// data
	state: () => ({
		movies: [], // 영화 목록
	}),

	// computed
	getters: {
		movieIds(state) { // 영화 목록에서 아이디만 추출
			return state.movies.map(m => m.imdbID)
		}
	},
	
	// methods
	mutations: {
		// 데이터 수정하는 곳
		resetMovies(state){
			state.movies = []
		}
	},
	actions: {
		// 데이터 수정 안됨. 비동기 처리하는 곳
		searchMovies(context){
	//searchMovies({ state, getters, commit }){
			context.state
		}
	},
}