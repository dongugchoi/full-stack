import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const UserItem = ({navigation,route}) => {
    useLayoutEffect(() =>{
        // 네비게이션 헤더 옵션 설정
        navigation.setOptions({
            headerBackTitleVisible : false, // 뒤로 가기 버튼의 텍스트 숨기기
            headerTintColor : '#ffffff', // 헤더 버튼 및 아이콘 색상 설정

            // 커스텀 버튼으로 화살표 모양의 뒤로 가기 버튼 설정
            headerLeft: ({onPress}) =>{
                return(
                    <MaterialCommunityIcons
                    name="arrow-left-circle"
                    size={30}
                    color="#333"
                    style={{marginLeft: 11}}
                    onPress={() => navigation.goBack()}
                    />
                );
            },

             // 커스텀 버튼으로 홈 아이콘 설정
            headerRight: ({tintColor})=>(
                <MaterialCommunityIcons
                    name="home-variant"
                    size={30}
                    color="#333"
                    style={{marginLeft: 11}}
                    onPress={() => navigation.popToTop()}
                    />
            ),
        });
    },[]);


  return (
    <Container>
      <StyledText>UserItem</StyledText>
      <StyledText>Name : {route.params.name}</StyledText>
      <StyledText>Email : {route.params.email}</StyledText>
    </Container>
  );
};

export default UserItem;