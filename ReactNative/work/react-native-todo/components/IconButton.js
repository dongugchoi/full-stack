import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { images } from '../src/images';

const Icon = styled.Image`
  tint-color: ${({ theme,completed }) => completed ? theme.done : theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

// 기본 매개변수를 통해 onPressOut의 기본값 설정
const IconButton = ({ type, onPressOut = () => {}, id }) => {
    const _onPressOut = () => {
        onPressOut(id);
    };

    return (
      <Pressable onPressOut={_onPressOut}>
        <Icon source={type} />
      </Pressable>
    );
};

IconButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
    id: PropTypes.string,
    completed : PropTypes.bool,
};

export default IconButton;
