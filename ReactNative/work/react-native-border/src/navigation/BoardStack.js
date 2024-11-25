import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; // 오타 수정: `@react-navigation/native` -> `@react-navigation/stack`
import MainScreen from "../screens/MainScreen";
import WriteScreen from "../screens/WriteScreen";
import { Pressable, StyleSheet } from "react-native";
import { AntDesign} from '@expo/vector-icons';
import { View,Text } from "react-native"


const BorderStack = createStackNavigator();

const BorderStackNavigation = () => {
    return (
        <BorderStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2ecc71', // 헤더 배경색 (바디 색과 동일하게 설정)
                },
                headerTintColor: '#fff', // 헤더 텍스트 색상
                headerTitleStyle: {
                    fontWeight: 'bold', // 헤더 텍스트 스타일
                },
                headerTitleAlign: 'center',
            }}>
            <BorderStack.Screen
                name="Main"
                component={MainScreen}
                options={{
                    title:'게시글 목록',
                }}
            />

            <BorderStack.Screen
                name="Write"
                component={WriteScreen}
                options={({navigation}) =>({
                    title:'글쓰기',
                    headerLeft:() => (
                        <Pressable onPress={()=> navigation.goBack()} style={{marginLeft:20}}>
                            <AntDesign name="close" size={24} color='white' />
                        </Pressable>
                    )
                })}
            />
        </BorderStack.Navigator>
    );
};



export default BorderStackNavigation;