import React from "react";
import { Button } from 'react-native';
import styled from "styled-components";

const Container = styled.View`
    background-color : #ffffff;
    align-items:center;
    flex:1;
    justify-content:center;
`  

const StyledText = styled.Text`
    font-size : 30px;
    margin-bottom: 10px;
`

const Main = ({navigation}) =>{
    return(
        <Container>
            <StyledText>Book Main</StyledText>
            <Button title="도서 목록 보기" 
            onPress={() => navigation.navigate('BookList')}/>
        </Container>
    )
}

export default Main;