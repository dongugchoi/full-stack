import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function EventInput() {
    const [text, setText] = useState('');
    const _onChange = event => setText(event.nativeEvent.text);

  return (
    <View>
      <Text style={{margin:10,fontSize:30}}>text:{text}</Text>
      <TextInput
        style={{borderWidth:1, padding:10, fontSize:20}}
        placeholder='Enter a text...'
        onChange={_onChange}
        />
    </View>
  )
}