import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ThemedComponent = () => {
  const { styles } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>This is a themed box!</Text>
      </View>
    </View>
  );
};

export default ThemedComponent;
