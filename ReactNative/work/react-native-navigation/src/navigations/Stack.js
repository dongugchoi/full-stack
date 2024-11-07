import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import List from "../screens/List";
import Item from "../screens/Item";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Platform } from 'react-native';

const Stack = createStackNavigator();


const StackNavigation = () => {

    

    return(
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{ 
                cardStyle : { backgroundColor: '#ffffff'},
                headerStyle :{
                    height : 110,
                    backgroundColor:'pink',
                    borderBottomWidth : 5,
                    borderBottomColor : 'violet',
                },
                headerTintColor: 'white',
                headerTitleStyle: {color:'#ffffff', fontSize:24},
                headerTitleAlign : 'center',
                headerTitle:({style})=>(
                    <MaterialCommunityIcons name="react" style={style} />
                ),
                headerBackImage: ({tintColor}) =>{
                    const style = {
                        marginRight : 5,
                        marginLeft: Platform.OS === 'ios' ? 11 : 0,
                    };
                    return(
                        <MaterialCommunityIcons
                        name="arrow-left-circle"
                        size={30}
                        color={tintColor}
                        style={style}
                        />
                    )
                }
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{ headerShown: false}}
            />
            <Stack.Screen 
                name="List" 
                component={List} 
                options={{
                    headerTitle: 'List Screen', 
                    headerBackTitleVisible: true, 
                    headerBackTitle: '집으로',
                    headerTitleStyle : {fontSize: 24},
                    headerTintColor: '#e74c3c',
                }}
            />
            <Stack.Screen name="Detail" component={Item} />
        </Stack.Navigator>
    )
}

export default StackNavigation