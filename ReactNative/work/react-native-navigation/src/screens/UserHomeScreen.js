import React from "react";
import { Button } from 'react-native';
import styled from "styled-components";

const Container = styled.SafeAreaView`
    background-color : #ffffff;
    align-items:center;
    flex:1;
    justify-content:center;
`  

const StyledText = styled.Text`
    font-size : 30px;
    margin-bottom: 10px;
`

const Main =({navigation}) =>{
    return(
        <Container>
            <StyledText>User</StyledText>
            <Button title="유저 목록 보기"
            onPress={() => navigation.navigate('UserList')} />
        </Container>
    )
}
export default Main;