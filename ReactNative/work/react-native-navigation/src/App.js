import React from "react";
import { NavigationContainer} from '@react-navigation/native';
import StackNavigation from "./navigations/Stack";
import TabNavigation from "./navigations/Tab";
import BookStackNavigaion from "./navigations/BookStack";
import UserStackNavigation from "./navigations/UserStack";
import ShoppingTabNavigation from "./navigations/ShopingTab";
import ChatTabNavigation from "./navigations/ChatTab";
import DrawerkNavigation from "./navigations/Drawer";


const App = () => {
    return(
    <NavigationContainer>
        <DrawerkNavigation />
    </NavigationContainer>

    )
}

export default App;