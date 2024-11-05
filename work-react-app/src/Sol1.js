import React, {useState} from 'react';

function Sol1(){
    const [ eating, SetEating] = useState(['초콜릿','사탕'])
    const[value, SetValue] = useState("");

    const inputHandler = (e) => {
        SetValue(e.target.value)
    }

    const clickHandler = () => {
        SetEating(a => [value, ...a])
        SetValue("");

    }

    const enterKeyEventHandler =(e) => {
        if(e.key === 'Enter'){
            clickHandler();
        }
    }
    return (
        <div className='sol1'>
            <input onChange={inputHandler} type="text" onKeyPress={enterKeyEventHandler} value={value}/>
            <buttont onClick={clickHandler} >추가</buttont>
            <ul>
                {eating.map((item,idx) =>(
                    <li className='li' key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Sol1;