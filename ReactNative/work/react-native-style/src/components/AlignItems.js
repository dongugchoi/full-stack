import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { box_styles } from '../ViewStyles';

const AlignItems = () => {
    const [alignItems, setAlignItems] = useState('row');

    return (
        <View style={box_styles.container}>
            <Text style={box_styles.title}>AlignItems: {alignItems}</Text>
            <View style={[box_styles.boxContainer, { alignItems: alignItems }]}>
                <View style={box_styles.box}><Text style={box_styles.boxText}>1</Text></View>
                <View style={box_styles.box}><Text style={box_styles.boxText}>2</Text></View>
                <View style={box_styles.box}><Text style={box_styles.boxText}>3</Text></View>
            </View>

            <View style={box_styles.buttons}>
                <Button title="Flex start" onPress={() => setAlignItems('flex-start')} />
                <Button title="Flex end" onPress={() => setAlignItems('flex-end')} />
                <Button title="Center" onPress={() => setAlignItems('center')} />
                <Button title="Stretch" onPress={() => setAlignItems('stretch')} />
                <Button title="Baseline" onPress={() => setAlignItems('baseline')} />
            </View>
        </View>
    );
};

export default AlignItems;