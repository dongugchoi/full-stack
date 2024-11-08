import React, {useLayoutEffect} from "react";
import styled from "styled-components";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Button } from "react-native";



const Container = styled.View`
    flex : 1;
    justify-content:center;
    align-items: center;
`

const StyledText = styled.Text`
    font-size:15px;
    margin-bottom: 5px;
`

const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    { id: '3', name: 'Alice Johnson', email: 'alice@example.com' },
  ];

  const UserList = ({navigation}) =>{
    useLayoutEffect(() =>{
        // 네비게이션 헤더 옵션 설정
        navigation.setOptions({
            headerBackTitleVisible : false, // 뒤로 가기 버튼의 텍스트 숨기기
            headerTintColor : '#333', // 헤더 버튼 및 아이콘 색상 설정

            // 커스텀 버튼으로 화살표 모양의 뒤로 가기 버튼 설정
            headerLeft: ({tintColor}) =>{
                return(
                    <MaterialCommunityIcons
                    name="arrow-left-circle"
                    size={30}
                    color={tintColor}
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
                    color={tintColor}
                    style={{marginLeft: 11}}
                    onPress={() => navigation.popToTop()}
                    />
            ),
        });
    },[]);
    const _onPress = item =>{
      navigation.navigate("UserItem", {id:item.id, name:item.name, email:item.email});
    }
  
    return (
        <Container>
          <StyledText style={{ marginBottom: 30, fontSize: 40 }}>User List</StyledText>
          {users.map((item) => (
            <View key={item.id} style={{ marginBottom: 5, alignItems: 'center' }}>
              <StyledText>{item.title}</StyledText>
              <Button title={`프로필보기 : ${item.name}`} onPress={() => _onPress(item)} />
            </View>
          ))}
        </Container>
      );
      
  }

export default UserList;