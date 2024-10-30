import React, {useState} from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { box_styles } from '../ViewStyles';

const JustifyContent = () => {
    const [justifyContent, setJustifyContent] = useState('flex-start');


    return (
        <View style={box_styles.container}>
            <Text style={box_styles.title}>justifyContent: {justifyContent}</Text>
            <View style={[box_styles.boxContainer, { justifyContent: justifyContent }]}>
                <View style={box_styles.box}><Text style={box_styles.boxText}>1</Text></View>
                <View style={box_styles.box}><Text style={box_styles.boxText}>2</Text></View>
                <View style={box_styles.box}><Text style={box_styles.boxText}>3</Text></View>
            </View>
            
        <ScrollView horizontal={true}>  
            <View style={box_styles.buttons}>
                <Button title="Flex start" onPress={() => setJustifyContent('flex-start')} />
                <Button title="Flex end" onPress={() => setJustifyContent('flex-end')} />
                <Button title="Center" onPress={() => setJustifyContent('center')} />
                <Button title="Space between" onPress={() => setJustifyContent('space-between')} />
                <Button title="Space around" onPress={() => setJustifyContent('space-around')} />
                <Button title="Space evenly" onPress={() => setJustifyContent('space-evenly')} />
            </View>
         </ScrollView>

        </View>

    );
};

export default JustifyContent;