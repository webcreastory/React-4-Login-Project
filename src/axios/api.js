import axios from "axios";

// mock 서버 URL : http://3.38.191.164/
// axios.create의 입력값으로 들어가는 객체는 configuration 객체에요.
const instance = axios.create({
	baseURL: "http://3.38.191.164/",
});

export default instance;