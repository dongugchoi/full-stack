import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React from 'react';

export function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>회원가입</Text>
        </View>
    )
}

export function Signup() {
  const handleSignup = () => {
    alert('회원가입 버튼이 눌렸습니다.');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text>이름</Text>
          <TextInput placeholder="이름을 입력하세요" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text>이메일</Text>
          <TextInput placeholder="이메일을 입력하세요" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text>비밀번호</Text>
          <TextInput placeholder="비밀번호를 입력하세요" style={styles.input} secureTextEntry />
        </View>

        <View style={styles.inputContainer}>
          <Text>비밀번호 확인</Text>
          <TextInput placeholder="비밀번호를 다시 입력하세요" style={styles.input} secureTextEntry />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="회원가입" onPress={handleSignup} color="#007AFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'lightgray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: 100,
  },
});
