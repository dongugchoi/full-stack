import React, {useState, useRef} from "react";

function InputSample(){

    const [inputs, setInputs] = useState({
        이름 : "",
        nickname : ""
    })

    const nameFocus = useRef();

    // 구조분해할당
    const {이름, nickname} = inputs;

    const onReset = () =>{
        setInputs({
            이름 :"",
            nickname :""
        })
        nameFocus.current.focus();
        
    }

    const onChange = (e) => {
        //e.target : 이벤트가 발생하는 주체
        //구조분해할당으로 value와 name이 있는데
        //value 에는 그 요소의 현재 값이 들어가고
        //name에는 요소의 name속성이 들어간다.
        const {value, name} = e.target;
        setInputs({
            ...inputs,//기본의 상태를 복사
            [name] : value // 그 태그에 value를 변경해줘
        })


    }


    return(
        <div>
            <input
                name="이름"
                placeholder="이름을 입력하세요"
                value={이름}
                ref={nameFocus}
                onChange={onChange}
            />
            <input
                name ="nickname"
                placeholder="닉네임을 입력하세요"
                onChange={onChange}
                value={nickname}
            />
            <button onClick ={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {이름}({nickname})
            </div>
        </div>
    )

}

export default InputSample;


