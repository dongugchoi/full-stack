import React from 'react';
import {View, Text, Pressable} from 'react-native';

const Button = (props) => {
  return (
    <Pressable
      style={{padding: 10, backgroundColor: '#1abc9c'}}
      onPressIn={() => console.log('Press In')}
      onPressOut={() => console.log('Press Out')}
      onPress={() => console.log('Press')}
      onLongPress={() => console.log('Long Press')}
      delayLongPress={3000}
      pressRetentionOffset={{bottom: 50, left: 50, right: 50, top: 50}}
      //pressRetentionOffset 속성은 사용자가 버튼을 길게 눌렀을 때 터치 영역을 확장해주는 역할
      hitSlop={50}>
        {/* hitSlop은 터치가능한영역확장 */}
      <Text style={{padding: 10, fontSize: 30}}>{props.title}</Text>
    </Pressable>
  );
};


export default Button;