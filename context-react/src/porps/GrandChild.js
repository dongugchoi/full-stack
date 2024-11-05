import React, { useContext } from 'react';
import { UserContext} from './UserContext';

function ChildComponent() {
  //UserContext로부터 데이터를 가져온다. 
  //user 상태와 setUser 함수를 가져와서 컴포넌트 내에서 사용할 수 있다.
  const { user, setUser } = useContext(UserContext);

  //user의 이름과 나이를 화면에 표시하고, 버튼을 클릭하면 setUser를 호출하여 사용자 정보를 업데이트할 수 있다.
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ name: 'Jane Doe', age: 28 })}>
        Change User
      </button>
    </div>
  );
}

export default ChildComponent;