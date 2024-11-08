import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/UserHomeScreen";
import UserList from "../screens/UserListScreen";
import UserItem from "../screens/UserItem";

const UserStack = createStackNavigator();

const UserStackNavigation =() => {

    return(
        <UserStack.Navigator
        initialRouteName="Main"
        screenOptions={{
            cardStyle: { backgroundColor: '#ffffff' },
            headerTitleAlign: 'center',
        }}
        >

        <UserStack.Screen
            name="Main"
            component={Main}
        />

        <UserStack.Screen
            name="UserList"
            component={UserList}
        />

        <UserStack.Screen
            name="UserItem"
            component={UserItem}
        />

        </UserStack.Navigator>
    )
}

export default UserStackNavigation;