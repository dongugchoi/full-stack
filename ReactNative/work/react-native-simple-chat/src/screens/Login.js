import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Image from '../components/Image';
import Input from '../components/input';
import { images } from '../utils/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { Button } from '../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Alert } from 'react-native';
import { login } from '../utils/firebase';
import { ProgressContext, UserContext } from '../contexts';

const Container = styled.View`
  flex: 1;
  justify-content : center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding : 0 20px;
  padding-top : ${({ insets: { top } }) => top}px;
  padding-bottom : ${({ insets: { bottom } }) => bottom}px;
`;
const ErrorText = styled.Text`
  align-items : flex-start;
  width: 100%;
  height : 20px;
  margin-bottom : 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`

const Login = ({ navigation }) => {
  const { spinner } = useContext(ProgressContext);
  const { dispatch } = useContext(UserContext);

  //useSafeAreaInsets()
  //화면의 안전 영역을 고려해 레이아웃을 조정할 때 사용하는 hook
  const insets = useSafeAreaInsets();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    //이메일을 입력하고, 비밀번호를 입력하고
    //조건에 맞게 입력했을 때 false로 바꾼다.
    //ios 장치의 상단 노치나 하단 홈 버튼 영역과 같은 안전 구역을 감안해 레이아웃을 맞추기 위해 사용
    //hook은 {top,buttom,left,right} 형태의 객체를 반환한다.
    //안전 영역의 높이나 너비를 픽셀 단위로 제공
    setDisabled(!(email && password && !errorMessage))

    //email,password,errorMessage의 값이 바뀔 때마다 useEffect를 실행
  }, [email, password, errorMessage])



  const _handleEmailChange = email => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? '' : 'Please verify your email.'
    );
  };

  const _handlePasswordChange = password => {
    setPassword(removeWhitespace(password));
  };
  const _handleLoginButtonPress = async () => {
    try {
      spinner.start();
      const user = await login({ email, password });
      dispatch(user);
      Alert.alert('LOGIN 성공', user.email);
    } catch (e) {
      Alert.alert('LOGIN 에러', e.message);

    } finally {
      spinner.stop();
    }
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}>
      <Container insets={insets}>
        <Image url={images.logo} imageStyle={{ borderRadius: 0 }} />
        <Input
          label="Email"
          value={email}
          onChangeText={_handleEmailChange}
          onSubmitEditing={_handleLoginButtonPress}
          placeholder="Email"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={_handlePasswordChange}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
      </Container>
      <ErrorText>{errorMessage}</ErrorText>

      {/* 로그인 버튼 */}
      <Button title="로그인"
        onPress={_handleLoginButtonPress}
        disabled={disabled}//여기서의 disabled는 props
      />

      {/* 회원가입 버튼 */}
      <Button
        title="회원가입"
        onPress={() => navigation.navigate('Signup')}
        isFilled={false}
      />
    </KeyboardAwareScrollView>

  );
};

export default Login;