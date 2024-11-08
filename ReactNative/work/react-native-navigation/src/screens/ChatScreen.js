import React from "react";
import styled from "styled-components";

const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    background-color : white;
`;

const StyledText = styled.Text`
    font-size:30px;

`

export const FriendScreen = () =>{
    return(
        <Container>
            <StyledText>친구 목록 입니다.</StyledText>
        </Container>
    )
}

export const SettingsScreen =() =>{
    return(
        <Container>
            <StyledText>설정 화면 입니다.</StyledText>
        </Container>
    )
}