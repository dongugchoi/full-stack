import React, {useState, useRef} from "react";

function RefSample(){
    
    //refNum = {current : 0}
    const refNum = useRef(0);

    //stateNum = 0;
    const [stateNum, setStateNum] = useState(0);

    console.log('렌더링 발생');
    let count = 0;
    let Num = count;

    //렌더링을 위한 변수
    const [render, setRender] = useState(0);

    const triggerReRender = () => {
        setRender(prevRender => prevRender + 1); // 이전 상태를 사용해 재렌더링
    };

    const increaseRefNum=()=>{
        refNum.current = refNum.current +1;
        console.log(`refNum : ${refNum.current}`);
        
    }

    const increaseStateNum=()=>{
        setStateNum(stateNum => stateNum+1);
        console.log(`stateNum : ${stateNum}`);
        
    }

    //자주 바뀌는 값을 state에 넣어놓으면 바뀔 때마다 렌더링이 일어나서
    //성능이 떨어질 수 있다.
    //이때 useRef를 사용하면 값이 바뀌어도 렌더리이 발생하지 않아 성능저하를 막을 수 있다.
    return(
        <div>
            <h1>refNum : {refNum.current}</h1>
            <h1>stateNum : {stateNum}</h1>
            <h1>letNum : {count}</h1>
            <button onClick={increaseRefNum}>refNum + 1</button>
            <button onClick={increaseStateNum}>stateNum + 1</button>
            <button onClick={() =>{count+=1; console.log(`count : ${count}`)} }>CountNum + 1</button>
            {/* <button onClick={render => setRender(!render)}>재렌더링</button> */}
            <button onClick={triggerReRender}>재렌더링</button>
        </div>
    )

}

export default RefSample;