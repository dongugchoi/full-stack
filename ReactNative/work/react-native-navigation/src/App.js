import React from "react";
import { NavigationContainer} from '@react-navigation/native';
import StackNavigation from "./navigations/Stack";
import TabNavigation from "./navigations/Tab";
import BookStackNavigaion from "./navigations/BookStack";



const App = () => {
    return(
    <NavigationContainer>
        <BookStackNavigaion />
    </NavigationContainer>

    )
}

export default App;