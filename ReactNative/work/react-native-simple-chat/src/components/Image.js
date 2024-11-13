import React, {useEffect} from 'react'
import styled from 'styled-components'
import PropTypes, { bool } from 'prop-types'
import {MaterialIcons} from '@expo/vector-icons';
import { Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const Container = styled.View`
    align-self : center;
    margin-bottom : 30px;
`

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.imageButtonBackground};
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

// props를 통해 전달되는 값에 따라 이미지가 원형으로 렌더링되도록 수정 (border-radius)
const StyledImage = styled.Image`
    background-color:${({theme})=> theme.imageBackground};
    width: 100px;
    height: 100px;
    border-radius : ${({rounded}) => (rounded ? 50 : 0)}px;
`

const ButtonIcon = styled(MaterialIcons).attrs({
    name:'photo-camera',
    size:22,
})`
    color:${({theme}) => theme.imageButtonIcon}
`

const PhotoButton = ({onPress}) =>{
    return(
        <ButtonContainer onPress={onPress}>
            <ButtonIcon />
        </ButtonContainer>
    )
}



const Image = ({url, imageStyle, rounded, showButton, onChangeImage}) => {
    useEffect(() => {
        (async () =>{
            try {
                if(Platform.OS === 'ios'){
                    const { status } = await Permissions.askAsync(
                        Permissions.CAMERA_ROLL
                    );
                    if(status !== 'granted'){
                        Alert.alert(
                            'Photo Permission',
                            'Please turn on the camera roll permissions.'
                        );
                    }
                }
            } catch (e) {
                Alert.alert('Photo Permission Error', e.message);               
            }
        })();
    },[]);
    
    const _handleEditButton = async () =>{
        try{
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Image,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
            if(!result.cancelled){
                onChangeImage(result.assets[0].uri);
            }
        }catch(e){
            Alert.alert('Photo Error', e.message);
        }
    }
    
    return(
        <Container>
            <StyledImage source={{uri:url}} style={imageStyle} rounded={rounded} />
            {showButton && <PhotoButton onPress={_handleEditButton}/>}
        </Container>
    )
}

Image.defaultProps = {
    rounded : false,
    showButton : false,
    onChangeImage: () =>{},
}

Image.propTypes = {
    uri: PropTypes.string, //uri에 들어오는 값은 string이어야 해
    imageStyle: PropTypes.object,
    rounded : PropTypes.bool,
    showButton : PropTypes.bool,
    onChangeImage:PropTypes.func,
}

export default Image;