// reducer.js
// 리듀서(Reducer): 액션에 따라 상태를 변경하는 순수 함수

// 초기 상태(initialState)를 정의함.
// count는 0으로 초기화됨.

// 1. 현재 상택 (state)
// 리듀서가 관리하는 현재 상태
// 처음 호출될 때 초기 상태가 설정됨
// 2. 액션(action)
// 상태를 변경할 이벤트, 액션 객체는 최소한 타입 속성을 가지며 상태를 어케 변경할지 리듀스에게 알려줌

const initialState = {count: 0};
  
  // counterReducer는 현재 상태(state)와 액션(action)을 인자로 받아 새로운 상태를 반환하는 함수다.
  
  // state가 undefined일 경우, initialState를 기본 값으로 사용함.
  const counterReducer = (state = initialState, action) => {
    // 액션의 타입에 따라 상태를 변경하기 위한 switch문을 사용함.
    switch (action.type) {
      // 'INCREMENT' 액션일 경우, count 값을 1 증가시킨 새로운 상태를 반환함.
      case 'INCREMENT':
        return {
          ...state, // 기존 상태를 복사하고
          count: state.count + 1, // count 값을 1 증가시킴
        };
      
      // 'DECREMENT' 액션일 경우, count 값을 1 감소시킨 새로운 상태를 반환함.
      case 'DECREMENT':
        return {
          ...state, // 기존 상태를 복사하고
          count: state.count - 1, // count 값을 1 감소시킴
        };
      
      // 액션 타입이 매치되지 않을 경우, 현재 상태를 그대로 반환함.
      default:
        return state; // 상태 변경 없이 현재 상태를 반환함
    }
  };
  
  // counterReducer를 export하여 다른 파일에서 사용할 수 있게 함.
  export default counterReducer;