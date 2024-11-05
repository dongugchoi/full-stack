//createContext import하기
import React, { createContext, useState } from 'react';

//새로운 Context를 생성한다.
export const UserContext = createContext();

// Context Provider 컴포넌트
//사용자 정보를 관리하고 하위 컴포넌트에 제공하는 Provider 컴포넌트이다.
export const UserProvider = ({ children }) => {
  //사용자 정보(이름과 나이)를 관리한다.
  const [user, setUser] = useState({ name: 'John Doe', age: 30 });

  return (
    //UserContext.Provider : Context에서 제공하는 특수한 컴포넌트
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};