import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FriendScreen, SettingsScreen } from "../screens/ChatScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ChatStackNavigation from "./ChatStack";
const TabIcon = ({ name, size, color }) => {
    return <MaterialCommunityIcons name={name} size={24} color={color} />
}

const ChatTab = createBottomTabNavigator();

const ChatTabNavigation = () => {
    return (
        <ChatTab.Navigator initialRouteName="FriendScreen"
        screenOptions={{
            headerTitleAlign:'center'
        }}>

            <ChatTab.Screen
                name="FriendScreen"
                component={FriendScreen}
                options={{
                    tabBarLabel: "Friend",

                    tabBarIcon: props => TabIcon({ ...props, name: props.focused ? 'account-multiple' : 'account-multiple-outline' }),

                }}
            />

            <ChatTab.Screen
                name="Chat Room"
                component={ChatStackNavigation}
                options={{
                    tabBarLabel:"Chat",
                    tabBarIcon: props => TabIcon({ ...props, name: props.focused ? 'chat' : 'chat-outline' }),
                }}
                />

            <ChatTab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: props => TabIcon({ ...props, name: props.focused ? 'cog' : 'cog-outline' }),
                }}
            />



        </ChatTab.Navigator>
    )
}

export default ChatTabNavigation;