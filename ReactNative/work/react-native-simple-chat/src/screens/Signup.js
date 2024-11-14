import React,{useState,useRef,useEffect, useContext} from 'react';
import styled from 'styled-components';
import { Alert, Text } from 'react-native';
import { Image,Input,Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail,removeWhitespace } from '../utils/common';
import { images } from '../utils/images';
import { signup} from '../utils/firebase';
import { ProgressContext, UserContext } from '../contexts';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding : 40px 20px;
`;

const ErrorText = styled.Text`
  align-items : flex-start;
  width : 100%;
  height : 20px;
  margin-bottom : 10px;
  line-height : 20px;
  color: ${({theme})=> theme.ErrorText};
`

const Signup = () => {
  const { dispatch } = useContext(UserContext);
  const {spinner } = useContext(ProgressContext);
  const [ name,setName] = useState('');//이름을 관리하는 state
  const[email, setEmail] = useState('');//이메일을 관리하는 state
  const[password,setPassword] = useState('');//비밀번호를 관리하는 state
  const[passwordConfirm,setPasswordConfirm]=  useState('');//비밀번호 일치여부 확인 state
  const[errorMessage,setErrorMessage] =  useState('');//에러메시지를 관리하는 state
  const[disabled,setDisabled] =  useState(true);//버튼 활성화 여부를 관리하는 state
  const[photoUrl,setPhotoUrl] =useState(images.photo);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const didMountRef=useRef();

  useEffect(() => {
    if(didMountRef.current){
    let _errorMessage = '';
    if(!name){
      _errorMessage='이름을 입력하세요';
    } 
    else if(!validateEmail(email)){
        _errorMessage='이메일의 형식 또는 이메일이 입력되지 않았습니다.';
    }
    else if(password.length<6){
      _errorMessage='6글자 이상 입력';
    }
    else if(password !== passwordConfirm){
      _errorMessage='비밀번호 안맞음';
    }
    else{
      _errorMessage='';
    }
    setErrorMessage(_errorMessage);
   
   } else{
    didMountRef.current = true;
   }
   } ,[name,email,password,passwordConfirm])

   useEffect(()=>{
    setDisabled(
      !(name && email && password && passwordConfirm && !errorMessage)
    )
   },[name,email,password,passwordConfirm,errorMessage])

   const _handleSignupButtonPress = async () => {
      try {
        spinner.start();
        const user = await signup({email, password, name, photoUrl});
        dispatch(user);
        console.log(user);
        Alert.alert('Signup Success', user.email);
      } catch (error) {
        Alert.alert('Signup Error', error.message);
      } finally{
        spinner.stop();
      }
   };


  return (
    
      <KeyboardAwareScrollView
      extraScrollHeight={20}
      >
        <Container>
          <Image rounded url={photoUrl}  
          showButton
          onChangeImage={url => setPhotoUrl(url)}/>
          <Input
            label = "Name"
            value = {name}
            onChangeText = {text => setName(text)}//텍스트가 변경 될 때마다 name 상태를 갱신
            onSubmitEditing = { () => {
              setName(name.trim());// 이름의 앞뒤 공백을 제거한 후 name 상태를 갱신
              emailRef.current.focus();// 이메일 입력란으로 포커스를 이동
            }}
            onBlur = {()=> setName(name.trim())}// 입력이 끝나면 이름의 앞뒤 공백을 제거
            placeholder = "name"
            returnKeyTpye = "next"// 키보드의 '다음' 버튼을 표시하여, 사용자가 입력 후 다음 입력란으로 이동
          />

          <Input
          ref={emailRef}
          label = "Email"
          value = {email}
          onChangeText = {text => setEmail(removeWhitespace(text))}
          onSubmitEditing= {() => passwordRef.current.focus()}
          placeholder="Email"
          returnKeyType="next"
          />

          <Input
          ref={passwordRef}
          label = "password"
          value = {password}
          onChangeText = {text => setPassword(removeWhitespace(text))}
          onSubmitEditing= {() => passwordConfirmRef.current.focus()}
          placeholeder="password"
          returnKeyType="done"
          isPassword
          />

          <Input
          ref={passwordConfirmRef}
          label = "passwordConfirm"
          value = {passwordConfirm}
          onChangeText = {text => setPasswordConfirm(removeWhitespace(text))}
          onSubmitEditing= {_handleSignupButtonPress}
          placeholeder="password"
          returnKeyType="done"
          isPassword
          />
          <ErrorText>{errorMessage}</ErrorText>
         <Button
            title="Signup"
            onPress={_handleSignupButtonPress}
            disabled = {disabled}
         />
      </Container>
      </KeyboardAwareScrollView>
    
  );
};

export default Signup;