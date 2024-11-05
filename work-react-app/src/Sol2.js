import React, {useState, useEffect} from 'react'



function MyComponent(){
    const [count, SetCount] = useState(0);
    const [text, SetText] = useState("")
    
    
    const inputHandler =(e) =>{
        console.log('input 값이 바뀜');
        SetText(e.target.value);
    }
    
    const countHandler = () => {
        console.log('count 값이 바뀜');
        SetCount(count +1);
    }
    
    useEffect(() => {
        
        console.log("렌더링 완료")
    },[])
    
    return(
        <div>
            <p>{count}</p>
            <button  onClick={countHandler}>+1</button>
            <hr/>
            <input onChange={inputHandler} type='text'></input>
            <h3>{text}</h3>
        </div>
    )
}

export default MyComponent;