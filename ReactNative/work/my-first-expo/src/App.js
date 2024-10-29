import React from 'react'
import { View, StyleSheet, Text} from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App =() => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>My First React Native</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#ffffff',
    },
    title:{
        fontSize :30
    }
})

export default App;
