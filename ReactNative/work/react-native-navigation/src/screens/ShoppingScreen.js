import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    background-color : white;
`;

const StyledText = styled.Text`
    font-size:30px;

`

export const HomeScreen = () => {
    return(
        <Container>
            <StyledText>Welcome to ShopApp</StyledText>
        </Container>
    )
}

export const CartScreen = () => {
    return(
        <Container>
            <StyledText>나의 카트 목록</StyledText>
            <Button title="AddItem" onPress={() =>alert('장바구니에 아이템이 추가 되었습니다.')}/>
        </Container>
    )
}

export const ProfileScreen = () => {
    return(
        <Container>
            <StyledText>Your Profile</StyledText>
        </Container>
    )
}