exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		body: 'hello world!',
		// body: JSON.stringify({ name: '바디는 문자만 반환됨, 객체로 사용하려면 이렇게' })
	}
}