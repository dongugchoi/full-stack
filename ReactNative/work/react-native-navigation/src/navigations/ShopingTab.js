import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CartScreen, HomeScreen, ProfileScreen } from "../screens/ShoppingScreen";

const TabIcon = ({ name, size, color }) => {
    return <MaterialCommunityIcons name={name} size={24} color={color} />
}

const ShopTab = createBottomTabNavigator();

const ShoppingTabNavigation =() =>{
    return(
        <ShopTab.Navigator initialRouteName="HomeScreen">
            <ShopTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: props => TabIcon({ ...props, name:props.focused ? 'home' : 'home-outline' }),
                    
                }}
            />

            <ShopTab.Screen
                name="Cart"
                component={CartScreen}
                options={{ 
                    tabBarIcon: props => TabIcon({ ...props, name:props.focused ? 'cart' : 'cart-outline'}),
                }}
            />

            <ShopTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: props => TabIcon({ ...props, name: props.focused ? 'account' : 'account-outline' }),
                }}
            />
        </ShopTab.Navigator>

    )
}

export default ShoppingTabNavigation