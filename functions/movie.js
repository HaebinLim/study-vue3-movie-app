// 브라우저 import / export
// nodejs 환경 require / exports

const axios = require('axios');
const OMDB_API_KEY = process.env.OMDB_API_KEY;

exports.handler = async function (event) {
	console.log(event);
	const payload = JSON.parse(event.body); // string을 객체로 변환
	const { title, type, year, page, id } = payload;
	const url = id 
	? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
	: `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&year=${year}&page=${page}`;

	try {
		const { data } = await axios.get(url);
		if (data.Error) {
			return {
				statusCode: 400, // 잘못된 요청처리
				body: data.Error,
			}
		}
		return {
			statusCode: 200,
			body: JSON.stringify(data),
		}
	} catch (error) {
		return {
			// https://github.com/axios/axios/#handling-errors
			statusCode: error.response.status,
			body: error.message,
		}
	}
	/*
	return new Promise((resolve, reject) => {
		axios.get(url)
			.then((res) => {
				if(res.data.Error){
					reject(res.data.Error)
				}
				resolve(res)
			})
			.catch((err) => reject(err.message))
	})
	*/
}