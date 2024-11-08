import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Meet, Settings } from '../screens/TabScreens';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabIcon = ({ name, size, color }) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />
}

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Settings"

            screenOptions={({ route }) => ({
                tabBarShowLabel: false, // 탭바 라벨 숨기기
                tabBarLabelPosition: 'beside-icon', // 아이콘 옆에 라벨 표시

                tabBarStyle: {
                    backgroundColor: '#54b7f9',
                    borderTopColor: '#ff.ffff',
                    borderTopWidth: 2,
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#cfcfcf',
                tabBarIcon: props => {
                    let name = '';
                    if (route.name === 'Mail') name = 'email';
                    else if (route.name === 'Meet') name = 'video';
                    else name = 'settings';
                    return TabIcon({ ...props, name });
                },

                headerStyle: {
                    backgroundColor: '#54b7f9', // 헤더 배경 색상을 탭바와 동일하게 설정
                },
            })}
        >
            <Tab.Screen
                name="Mail"
                component={Mail}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: props => TabIcon({ ...props, name:props.focused ? 'email' : 'email-outline' }),
                }}
            />

            <Tab.Screen
                name="Meet"
                component={Meet}
                options={{
                    tabBarIcon: props => TabIcon({ ...props, name:props.focused ? 'video' : 'video-outline'}),
                }}
            />

            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: props => TabIcon({ ...props, name: props.focused ? 'cog' : 'cog-outline' }),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation;