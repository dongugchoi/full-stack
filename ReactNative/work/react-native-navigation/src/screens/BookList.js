import React, {useLayoutEffect} from 'react';
import { Button, View } from 'react-native';
import styled from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Container = styled.View`
    flex : 1;
    justify-content:center;
    align-items: center;
`

const StyledText = styled.Text`
    font-size:15px;
    margin-bottom: 10px;
`
const book = [
    {id:'1', title: '홍길동전', description: '이것은 홍길동전의 설명입니다.'},
    {id:'2', title: '콩쥐팥쥐', description: '이것은 콩쥐팥쥐의 설명입니다.'},
    {id:'3', title: '신데렐라', description: '이것은 신데렐라의 설명입니다.'},
    {id:'4', title: '우투리전', description: '이것은 우투리전의 설명입니다.'},
    {id:'5', title: '운수좋은날', description: '이것은 운수좋은날의 설명입니다.'},
]

const BookList = ({navigation})=>{
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
        navigation.navigate('BookItem', {id: item.id, title:item.title, description:item.description})
    };

    return (
        <Container>
            <StyledText style={{marginBottom: 30, fontSize:40}}>Book List</StyledText>
            {book.map((item) => (
                <View key={item.id} style={{ marginBottom: 20, alignItems: 'center' }}>
                    <StyledText>{item.title}</StyledText>
                    <Button title="상세 보기" onPress={() => _onPress(item)} />
                </View>
            ))}
        </Container>
    );
}

export default BookList;