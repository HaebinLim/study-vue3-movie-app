export default {
	namespaced: true,
	state: () => ({
		/* state는 왜 함수? 
			객체는 참조형 데이터. 데이터 불변성을 유지하려면 함수로 만들어 객체로 반환. 
		*/
		name: 'haebin',
		email: 'goguma-guma@hanmail.net',
		phone: '010-1234-1234',
		image: 'https://media.vlpt.us/images/gogumaguma/profile/345b84fa-3c7d-4513-a5a5-f6d41fe27bed/KakaoTalk_Photo_2022-03-13-00-23-30.jpeg?w=240'
	})
}