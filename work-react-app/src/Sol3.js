import React, {useState, useEffect} from 'react'

function MyComponent1(){
    const [count, SetCount] = useState(0);
    const [renderCount, setRenderCount] = useState(0);

    

    
    const countHandler = () => {
        SetCount(count+1);
    }
    
    useEffect(() => {
        setRenderCount(renderCount + 1);
        console.log("렌더링 완료")
    },[count])
    
    return(
        <div>
            <h1>Count : {count}</h1>
            <h1>렌더링 횟수 : {renderCount}</h1>
            <button  onClick={countHandler}>+1</button>
        </div>
    )
}

export default MyComponent1;