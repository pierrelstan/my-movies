import React, { useRef } from 'react';
import {
  Text,
  StatusBar,
  Animated,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import { saveState } from '../assets/asyncStorage/asyncStorage';
import LoadingSuccessAnimation from './LoadingSuccessAnimtion';
import moviePoster from '../assets/moviesposter.jpg';

const ScreenHeight = Dimensions.get('screen').height;
const ScreenWidth = Dimensions.get('screen').width;

export default function Login({ navigation }) {
  const TopAnim = useRef(new Animated.Value(ScreenHeight)).current;
  const LeftAnim = useRef(new Animated.Value(ScreenHeight)).current;

  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });
  const [active, setActive] = React.useState(false);
  const [state, setState] = React.useState({
    email: '',
    password: '',
  });

  React.useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('state');

        if (value !== null) {
          let data = JSON.parse(value);

          const { email, password } = data;
          setState({
            email: email,
            password: password,
          });
        }
      } catch (e) {}
    };
    getData();
  }, [active]);

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        Animated.parallel([
          Animated.spring(TopAnim, {
            toValue: Math.round(ScreenHeight / 8),
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

  const handleSignUp = () => {
    navigation.push('SignUp');
  };
  const onChangeText = (name) => {
    return (text) => {
      setUser({ ...user, [name]: text });
    };
  };
  const hanldeSubmit = () => {
    const { email, password } = user;

    if (email === state.email && password === state.password) {
      setActive(true);
    }

    setTimeout(() => {
      if (email === state.email && password === state.password) {
        navigation.push('Home');
        setActive(false);
      }
    }, 200);
  };

  return (
    <Container>
      <ImageBackground
        source={moviePoster}
        style={{ width: ScreenWidth, height: 400 }}
      />
      <Wrapper>
        <AnimatedContainerTitle
          style={{
            transform: [{ translateX: LeftAnim }],
          }}
        >
          <Title>Welcome!</Title>
        </AnimatedContainerTitle>
        <AnimatedContainerInput
          style={{
            transform: [{ translateY: TopAnim }],
            paddingHorizontal: 10,
            flexDirection: 'column',
          }}
        >
          <WrapperInput>
            <Text
              style={{
                color: '#b6b133',
                fontSize: 18,
                padding: 5,
              }}
            >
              Email :
            </Text>
            <Input
              name='email'
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={onChangeText('email')}
              value={user.email}
              onSubmitEditing={() => hanldeSubmit()}
            />
          </WrapperInput>
          <WrapperInput>
            <Text
              style={{
                color: '#b6b133',
                fontSize: 18,
                padding: 5,
              }}
            >
              Password :
            </Text>
            <Input
              name='password'
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={onChangeText('password')}
              value={user.password}
              onSubmitEditing={() => hanldeSubmit()}
              secureTextEntry={true}
              defaultValue={user.password}
            />
          </WrapperInput>
          <TouchableOpacity onPress={() => hanldeSubmit()}>
            <WrapperButton>
              <ButtonLogin>Login</ButtonLogin>
            </WrapperButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSignUp()}>
            <WrapperButton>
              <ButtonSignUp>Sign Up</ButtonSignUp>
            </WrapperButton>
          </TouchableOpacity>
        </AnimatedContainerInput>
        {active && <LoadingSuccessAnimation active={active} />}
      </Wrapper>
      <StatusBar backgroundColor='#383958' barStyle='auto' />
    </Container>
  );
}
const Wrapper = styled.View`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: #383958bf;
`;
const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #383958;
`;
const ContainerInput = styled.View`
  flex: 2;
  background-color: #24243c;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 40px;

  /* justify-content: center; */
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
  /* text-transform: uppercase; */
`;
const ContainerTitle = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px;
`;
const AnimatedContainerTitle = Animated.createAnimatedComponent(ContainerTitle);
const ButtonLogin = styled.Text`
  border-radius: 10px;
  background-color: #b6b133;
  color: #fff;
  height: 40px;
  text-align: center;
  align-items: center;
  padding: 10px;
  font-size: 16px;
`;
const ButtonSignUp = styled.Text`
  border-radius: 10px;
  background-color: #383958;
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
