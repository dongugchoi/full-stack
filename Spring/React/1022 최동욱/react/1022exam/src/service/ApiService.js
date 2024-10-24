import axios from 'axios';
import { API_BASE_URL } from "./api-config";

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json"
    })
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if(accessToken && accessToken !== null){
        headers.append("Authorization","Bearer " + accessToken);
    }
    
    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method
    };
    

    
    if (request) {
        options.data = JSON.stringify(request); 
    }

    
    return axios(options)
        .then(response => {
                return response.data;
        })
        
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

export function signout(){
    
    localStorage.setItem("ACCESS_TOKEN",null);
    window.location.href="/login"
}

export function signup(userDTO){
    return call("/auth/signup","POST",userDTO);
}