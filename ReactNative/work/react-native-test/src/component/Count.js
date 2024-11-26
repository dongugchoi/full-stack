import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{count}</Text>
            <Button title="+1" onPress={() => setCount(count + 1)} style={styles.btnct}/>
            <Button title="- 1" onPress={() => setCount(count - 1)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', 
    },
    text: {
        fontSize: 32, 
        marginBottom: 20, 
    },
    btnct:{
        marginBottom:10,
    }
});

export default Count;