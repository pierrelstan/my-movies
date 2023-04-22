import React, { useRef, useEffect, useCallback } from "react";
import {
  Text,
  StatusBar,
  Animated,
  Dimensions,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";

import LoadingSuccessAnimation from "./LoadingSuccessAnimtion";
import moviePoster from "../assets/moviesposter.jpg";

const ScreenHeight = Dimensions.get("screen").height;
const ScreenWidth = Dimensions.get("screen").width;

const AuthContext = React.createContext();

export default function LoginScreen({ navigation, route }) {
  const { setUserToken } = route.params;

  const [iSignUp, setIsSignUp] = React.useState(false);

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [active, setActive] = React.useState(false);
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("state");

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

  const handleSignUp = () => {
    setIsSignUp(true);
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
        setUserToken("token");
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
        <Form
          style={{
            transform: [{ translateY: ScreenHeight / 5 }],
            paddingHorizontal: 10,
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              color: "#b6b133",
              fontSize: 18,
              padding: 5,
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            Login
          </Text>
          <Text
            style={{
              color: "#b6b133",
              fontSize: 18,
              padding: 5,
            }}
          >
            Email :
          </Text>
          <Input
            name="email"
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={onChangeText("email")}
            value={user.email}
            onSubmitEditing={() => hanldeSubmit()}
          />

          <Text
            style={{
              color: "#b6b133",
              fontSize: 18,
              padding: 5,
            }}
          >
            Password :
          </Text>
          <Input
            name="password"
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={onChangeText("password")}
            value={user.password}
            onSubmitEditing={() => hanldeSubmit()}
            secureTextEntry={true}
            defaultValue={user.password}
          />

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
        </Form>
        {active && <LoadingSuccessAnimation active={active} />}
      </Wrapper>
      <StatusBar backgroundColor="#383958" barStyle="auto" />
    </Container>
  );
}
const Wrapper = styled.View`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;
const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #383958;
`;
const Form = styled.View`
  flex: 2;
  background-color: #24243c;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 40px;
`;

const Input = styled.TextInput`
  color: #fff;
  border-radius: 10px;
  padding: 10px;
`;

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
