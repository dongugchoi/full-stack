export const validateEmail = email => {
    const regex =/^[0-9?A-z0-9?]_(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}%/;
    return regex.test(email);
}

export const removeWhitespace = text =>{
    const regex = /\s/g; //공백을 찾음
    // /g를 안쓰면 최최의 공백만 찾고 멈춤
    // 문자열의 모든 공백을 찾으려면 /g 까지 써줘야 한다.
    // /g : 정규표현식이 문자열에서 모든 일치 항목을 찾도록 설정
    
    return text.replace(regex, '');
}