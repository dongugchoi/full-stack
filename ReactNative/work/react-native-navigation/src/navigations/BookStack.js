import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/BookMainScreen";
import BookList from "../screens/BookList";
import BookItem from "../screens/BookItem";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Platform } from 'react-native';

const BookStack = createStackNavigator();

const BookStackNavigaion = () => {

    return (
        <BookStack.Navigator
            initialRouteName="Main"
            screenOptions={{
                cardStyle: { backgroundColor: '#ffffff' },
                headerTitleAlign: 'center',
            }}

        >
            <BookStack.Screen
                name="Main"
                component={Main}
            />

            <BookStack.Screen
                name="BookList"
                component={BookList}
            />

            <BookStack.Screen
                name="BookItem"
                component={BookItem} // BookItem 스크린 추가
            />
        </BookStack.Navigator>
    )
}
export default BookStackNavigaion;