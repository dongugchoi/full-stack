import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider } from '../src/context/ThemeContext';
import ThemedComponent from '../src/component/ThemdComponent';
import ThemeToggleButton from '../src/component/ThemeToggleButton';
import Count from './component/Count';

const App = () => {
  return (
    //3번문제
    // <Count />

    //7번문제
    <ThemeProvider>
      <View style={styles.container}>
        <ThemedComponent />
        <ThemeToggleButton />
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
