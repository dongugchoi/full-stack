import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    return (
        //드로어 내용을 스크롤 할 수 있는 컴포넌트로 기본 드로어 항목을 감싸고 추가 콘텐츠를 넣을 수 있다.
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
            {/* 커스텀드로어의 헤더영역 */}
            <View style={styles.header}>
                <Text style={styles.headerText}>My Custom Drawer</Text>
            </View>

            {/* 커스텀 버튼 */}
            <TouchableOpacity
                style={styles.customButton}
                onPress={() => alert("Custom Button Pressed")}
            >
                <MaterialCommunityIcons name="star" size={24} color="white"/>
                <Text style={styles.customButtonText}>CustomButton</Text>

            </TouchableOpacity>
            {/* 기본 드로어 메뉴 항목 표시 : 드로어에 설정된 스크린 목록을 보여줌 */}
            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    )
}


const DrawerkNavigation = ({ navigation }) => {

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props}/>}
            screenOptions={({ navigation }) => ({
                drawerStyle: {
                    backgroundColor: '#e6e6e6',
                    width: 240,
                    borderWidth: 5,
                    borderColor: '#3498db'
                },
                drawerLabelStyle: { fontSize: 20, },
                drawerActiveTintColor: '#4CAF50',
                drawerInactiveTintColor: '#757575',
                drawerPosition: "right",
                headerTitle: "드로어테스트",
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#4CAF50'
                },
                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#fff',

                },
                headerLeft: () => null,
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={{ marginRight: 15 }}
                    >
                        <MaterialCommunityIcons name="menu" size={28} color="black" />
                    </TouchableOpacity>
                ),
                drawerType: 'slide'

            })}>
            <Drawer.Screen name="Home" component={HomeScreen}
                options={{
                    dreawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }} />
            <Drawer.Screen name="Profile" component={ProfileScreen}
                options={{
                    dreawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerContent :{
        flex:1,
    },
        header:{
            padding:20,
            backgroundColor:'#4CAF50',
            alignItems:'center',
        },
        headerText:{
            color:'white',
            fontSize:20,
            fontWeight:'bold',
        },
        customButton:{
            flexDirection:'row',
            alignItems:'center',
            padding:15,
            margin:10,
            backgroundColor:'#4CAF50',
            borderRadius:8,
        },
        customButtonText:{
            color:'white',
            marginLeft:10,
            fontSize:16,
        }
})

export default DrawerkNavigation