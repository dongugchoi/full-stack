import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Header = styled.View`
  padding: 20px;
  background-color:yellow;
  flex-direction: row;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

const MessageContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
`;

const StyledText = styled.Text`
  font-size: 18px;
  color: #333;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-self: flex-start;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 2;
`;

const ChatItem = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Container>
      <Header>
        <MaterialCommunityIcons name="arrow-left" size={30} color="black" onPress={() => navigation.goBack()} />
        <HeaderTitle>{route.params.name}</HeaderTitle>
      </Header>
      <MessageContainer>
        <StyledText>보낸사람 : {route.params.name}</StyledText>
        <StyledText>메시지 : {route.params.description}</StyledText>
      </MessageContainer>
    </Container>
  );
};

export default ChatItem;
