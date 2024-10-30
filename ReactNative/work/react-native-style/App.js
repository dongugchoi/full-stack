import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Signup } from './src/components/Signup';

export default function App() {
    return (
        <View style={styles.container}>
            <Signup />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
});
