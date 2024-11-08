import React, {useLayoutEffect} from 'react';
import { Button, View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.View`
    flex: 1;
    background-color: #f0f0f0;
`;

const ChatRoom = styled.View`
    background-color: white;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    shadow-color: #000;
    shadow-opacity: 0.2;
    shadow-radius: 5px;
    elevation: 3;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
`;

const chatRooms = [
    {id: '1', name: 'General Chat', description: 'This is the general chat room for all discussions.'},
    {id: '2', name: 'Sports Talk', description: 'A chat room dedicated to sports enthusiasts.'},
    {id: '3', name: 'Book Lovers', description: 'Chat room for those who love discussing books.'},
    {id: '4', name: 'Movie Club', description: 'Discuss your favorite movies here.'},
    {id: '5', name: 'Tech Talk', description: 'A place to discuss the latest in technology.'},
    {id: '6', name: 'Gaming Zone', description: 'Chat room for gamers to connect and share.'},
    {id: '7', name: 'Travelers Hub', description: 'Share your travel experiences and tips here.'}
];

const List =({navigation})=>{
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown:false,
        })
    })

    const _onPress = item =>{
        navigation.navigate('ChatItem', { name:item.name, description:item.description})
    };

    return (
        <Container>
            {chatRooms.map((item) => (
                <ChatRoom key={item.id}>
                    <StyledText>{item.name}</StyledText>
                    <Button title="메시지 보기" onPress={() => _onPress(item)} />
                </ChatRoom>
            ))}
        </Container>
    );
};

export default List;
