import React, { useState } from 'react'
import { View, Text} from 'react-native';
import Components from './Components';

const Counter = () => {
    const [count, setCount] = useState(0);

  return (
    <View style={{alignItems: 'center'}}>
        <Text>값 : {count}</Text>
        
        <Components title="+1" onPress={() => setCount(count + 1)}/>
        {count<= 0 ?(

            <Text></Text>
        ) : (
            <Components title="-1" onPress={() => setCount(count - 1)}/>
        )} 
        
        
    </View>
  )
}

export default Counter
