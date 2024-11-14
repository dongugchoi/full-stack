import React, { useState, forwardRef } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;
const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({ theme, isFocused }) => (isFocused ? theme.text : theme.label)};
`;

const StyledTextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.inputPlaceholder,
}))`
  background-color: ${({ theme, editable }) =>
    editable ? theme.background : theme.inputDisabledBackground};
  color: ${({ theme }) => theme.text};
  padding: 20px 10px;
  font-size: 16px;
  border: 1px solid
    ${({ theme, isFocused }) => (isFocused ? theme.text : theme.inputBorder)};
  border-radius: 4px;
`;

const Input = forwardRef(
  (
    {
      disabled,
      label,
      value,
      onChangeText,
      onSubmitEditing,
      onBlur,
      placeholder,
      isPassword,
      returnKeyType,
      maxLength,
    },

    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <Container>
        <Label isFocused={isFocused}>{label}</Label>
        <StyledTextInput
          editable={!disabled}
          ref={ref}//Login에서 정의된 useRef 함수
          isFocused={isFocused}//포커스가 맞춰졌는지
          value={value}//호출한 쪽에서 넘어온 값
          onChangeText={onChangeText}// 호출한 쪽에서 넘어온 함수
          onSubmitEditing={onSubmitEditing}//호출한 쪽에서 넘어온 함수
          onFocus={() => setIsFocused(true)}//input에 포커스가 잡힐 때 실행
          onBlur={() => {//input에 포커스가 안될 때 실행
            setIsFocused(false);
            onBlur();//PropType에 디폴트로 설정한 값이 실행
          }}
          placeholder={placeholder}
          secureTextEntry={isPassword}
          returnKeyType={returnKeyType}//키보드의 완료버튼의 표시
          maxLength={maxLength}//input에 쓸 수 있는 최대 길이
          autoCapitalize="none"//첫글자 대문자 안나오게
          autoCorrect={false}//단어 추천기능 안뜨게
          textContentType="none"//ios에서만 사용하는 옵션,옵션에 따라 뜨는 키보드가 달라진다.
          underlineColorAndroid="transparent"//컴포넌트의 밑줄 색상을 설정할 때 사용
        />

      </Container>
    );
  }
);

Input.defaultProps = {
  onBlur: () => {},
  onChangeText: () => {},
  onSubmitEditing: () => {},
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  returnKeyType: PropTypes.oneOf(['done', 'next']),
  maxLength: PropTypes.number,
  disabled:PropTypes.bool,
};

export default Input;