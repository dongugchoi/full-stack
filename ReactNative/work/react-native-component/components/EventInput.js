import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function EventInput() {
    const [text, setText] = useState('');

    //event.nativeEvent를 통해 문자열을 얻어와야 한다.
    const _onChange = event => setText(event.nativeEvent.text);
    //컴포넌트의 텍스트가 변경됬을 때 문자열만 인수로 전달한다.
    const _onChangeText = text => setText(text);

  return (
    <View>
      <Text style={{margin:10,fontSize:30}}>text:{text}</Text>
      <TextInput
        style={{borderWidth:1, padding:10, fontSize:20}}
        placeholder='Enter a text...'
        // onChange={_onChange}
        onchange={_onChangeText}
        />
    </View>
  )
}