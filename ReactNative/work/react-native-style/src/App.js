import React from 'react';
import { View, Text } from 'react-native';
import { viewStyles, textStyles } from './styles';

const App = () => {
  return (
    <View style={viewStyles.container}>
      <Text style={[textStyles.text, { color: 'green' }]}>
        Inline Styling - Text
      </Text>
      <Text style={[textStyles.text, textStyles.error]}>
        Inline Styling - Error
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
  },
  error: {
   padding: 10,
    fontSize: 26,
    fontWeight: '400',
    color: 'red',
  },
});

export default App;