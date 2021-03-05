import React, { useRef } from 'react';
import { Text, StatusBar, View, Animated, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import { saveState } from '../assets/asyncStorage/asyncStorage';

const ScreenHeight = Dimensions.get('screen').height;
const ScreenWidth = Dimensions.get('screen').width;
console.log(ScreenHeight);
export default function SignUp({ navigation }) {
  const TopAnim = useRef(new Animated.Value(ScreenHeight)).current;
  const LeftAnim = useRef(new Animated.Value(ScreenHeight)).current;

  const [user, setUser] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        Animated.parallel([
          Animated.spring(TopAnim, {
            toValue: Math.round(ScreenHeight) / 40,
            duration: 2,
            useNativeDriver: true,
          }).start(),
          Animated.spring(LeftAnim, {
            toValue: Math.round(ScreenWidth) / 20,
            duration: 2,
            useNativeDriver: true,
          }).start(),
        ]);
      });

      return unsubscribe;
    }, [navigation]),
  );

  const handleLogin = () => {
    navigation.push('Login');
  };
  const onChangeText = (name) => {
    return (text) => {
      setUser({ ...user, [name]: text });
    };
  };
  const hanldeSubmit = () => {
    const { firstname, lastname, email, password, confirmPassword } = user;
    saveState({ firstname, lastname, email, password, confirmPassword });
  };
  return (
    <Container>
      <AnimatedContainerTitle
        style={{
          transform: [{ translateX: LeftAnim }],
        }}
      >
        <Title>Register</Title>
      </AnimatedContainerTitle>
      <AnimatedContainerInput
        style={{
          transform: [{ translateY: TopAnim }],
          paddingHorizontal: 10,
          flexDirection: 'column',
        }}
      >
        <WrapperInput>
          <Label>First Name:</Label>
          <Input
            name='firstname'
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={onChangeText('firstname')}
            value={user.firstname}
            onSubmitEditing={() => hanldeSubmit()}
          />
        </WrapperInput>
        <WrapperInput>
          <Label>Last Name:</Label>
          <Input
            name='lastname'
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={onChangeText('lastname')}
            value={user.lastname}
            onSubmitEditing={() => hanldeSubmit()}
          />
        </WrapperInput>
        <WrapperInput>
          <Label>Email:</Label>
          <Input
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={onChangeText('email')}
            value={user.email}
            onSubmitEditing={() => hanldeSubmit()}
          />
        </WrapperInput>
        <WrapperInput>
          <Label>Password:</Label>
          <Input
            name='password'
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={onChangeText('password')}
            value={user.password}
            onSubmitEditing={() => hanldeSubmit()}
          />
        </WrapperInput>
        <WrapperInput>
          <Label>Confirm Password:</Label>
          <Input
            name='confirmPassword'
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={onChangeText('confirmPassword')}
            value={user.confirmPasssord}
            onSubmitEditing={() => hanldeSubmit()}
          />
        </WrapperInput>
        <TouchableOpacity onPress={() => hanldeSubmit()}>
          <WrapperButton>
            <ButtonSignUp>Sign Up</ButtonSignUp>
          </WrapperButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLogin()}>
          <WrapperButton>
            <ButtonLogin>Login</ButtonLogin>
          </WrapperButton>
        </TouchableOpacity>
      </AnimatedContainerInput>
      <StatusBar backgroundColor='#383958' barStyle='auto' />
    </Container>
  );
}
const Container = styled.View`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #383958;
`;
const Label = styled.Text`
  color: #b6b133;
  font-size: 18px;
  padding: 5px;
`;
const ContainerInput = styled.View`
  flex: 2;
  background-color: #24243c;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 30px;
`;
const AnimatedContainerInput = Animated.createAnimatedComponent(ContainerInput);
const WrapperInput = styled.View``;
const Input = styled.TextInput`
  color: #fff;
  border-radius: 10px;
  padding: 10px;
`;
const Title = styled.Text`
  font-size: 52px;
  color: #b6b133;
  font-weight: bold;
`;
const ContainerTitle = styled.View`
  justify-content: center;
  padding-top: 10px;
`;
const AnimatedContainerTitle = Animated.createAnimatedComponent(ContainerTitle);
const ButtonLogin = styled.Text`
  border-radius: 10px;
  background-color: #383958;
  height: 40px;
  text-align: center;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  color: #fff;
`;
const ButtonSignUp = styled.Text`
  border-radius: 10px;

  background-color: #b6b133;
  height: 40px;
  text-align: center;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  color: #fff;
`;
const WrapperButton = styled.View`
  padding-top: 16px;
`;
