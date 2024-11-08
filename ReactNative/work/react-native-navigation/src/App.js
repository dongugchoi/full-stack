import React from "react";
import { NavigationContainer} from '@react-navigation/native';
import StackNavigation from "./navigations/Stack";
import TabNavigation from "./navigations/Tab";
import BookStackNavigaion from "./navigations/BookStack";
import UserStackNavigation from "./navigations/UserStack";
import ShoppingTabNavigation from "./navigations/ShopingTab";
import ChatTabNavigation from "./navigations/ChatTab";


const App = () => {
    return(
    <NavigationContainer>
        <ChatTabNavigation />
    </NavigationContainer>

    )
}

export default App;