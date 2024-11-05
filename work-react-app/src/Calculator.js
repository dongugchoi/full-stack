import React, {useState} from 'react'

function Calculator(){
     const [val1, Setval1]  = useState("");
     const [val2, Setval2]  = useState("");
     const [result, Setresult] = useState("");

    const reset = () => {
        Setval1("");
        Setval2("");
    }
    

     const inputHandler1 = (e) => {
        Setval1(Number(e.target.value))
        console.log(Number(e.target.value));
        Setresult("");
     }

     const inputHandler2 = (e) => {
        Setval2(Number(e.target.value))
        console.log(Number(e.target.value));
        Setresult("");
     }

     const plus = (e) => {
        Setresult(val1 + val2);
        reset();

     }

     const minus =(e) => {
        Setresult(val1 - val2);
        reset();
     }

     const division =(e) => {    
        Setresult(val1 * val2);
        reset();
    }
    
    const multiply =(e) =>{
        
        if(val2 === 0){
            Setresult('0으로 나눌 수 없습니다.')
        }else{
            Setresult(val1 / val2)
        };
        reset();
    }





return(
    <div>
    <input onChange={inputHandler1} type='number' placeholder='입력' value={val1}></input>
    
    <div>
    <input onChange={inputHandler2} type='number' placeholder='입력' value={val2}></input>
    </div>
    <hr/>
    <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={division}>*</button>
        <button onClick={multiply}>/</button>
    </div>

    <h1> 결과 :{ result}</h1>
    
    </div>
);
}

export default Calculator;