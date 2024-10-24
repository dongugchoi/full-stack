import axios from 'axios';
import { API_BASE_URL } from "./api-config";


//api : 호출할 API의 경로 (예: /todos, /users)
//method: HTTP 메서드 (예: GET, POST, PUT, DELETE)
//request: 요청에 담을 데이터(주로 POST, PUT 요청에서 사용)
export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json"
    })
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if(accessToken && accessToken !== null){
        headers.append("Authorization","Bearer " + accessToken);
    }
    // 기본 옵션 설정
    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method
    };
    

    // request가 존재하는 경우: POST, PUT, DELETE와 같은 GET 이외의 요청일 때, 요청 본문에 데이터를 담아 보낸다.
    if (request) {
        options.data = JSON.stringify(request); // 객체 형태로 전달된 데이터를 JSON 문자열로 변환하여 서버에 전송한다.
    }

    // axios(options): 앞서 설정한 options 객체를 사용하여 Axios로 HTTP 요청을 보낸다.
    return axios(options)
        .then(response => {
                return response.data;
        })
        //요청 중에 오류가 발생한 경우 실행되는 코드.
        .catch(error => {
            console.log("http error")
            if(error.status === 403){
                window.location.href="/login";
            }
        });
         
}
export function signin(userDTO){
    return call("/auth/signin", "POST", userDTO)
        .then((response) => {
            console.log("response : " + response);
            if(response.token){
                localStorage.setItem("ACCESS_TOKEN",response.token);
                window.location.href="/";
            }else{
                window.location.href="/login";
            }
        }
    )
}
//로그아웃
export function signout(){
    // 로컬스토리지의 값을 null로 만든다.
    localStorage.setItem("ACCESS_TOKEN",null);
    window.location.href="/login"
}
// 회원 생성
export function signup(userDTO){
    return call("/auth/signup","POST",userDTO);
}