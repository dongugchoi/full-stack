import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import List from "../screens/ChatListScreen";
import ChatItem from "../screens/ChatItem";
const ChatStack = createStackNavigator();

const ChatStackNavigation = () => {
    return(
        <ChatStack.Navigator>
            <ChatStack.Screen 
                name="Chat"
                component={List}
            />

            <ChatStack.Screen
                name="ChatItem"
                component={ChatItem}
            />
        </ChatStack.Navigator>
    )
}

export default ChatStackNavigation