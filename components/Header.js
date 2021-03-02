import * as React from 'react';
import styled from 'styled-components';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
  const [loaded] = useFonts({
    Monoton: require('../assets/fonts/Monoton-Regular.ttf'),
  });

  return (
    <Container>
      <Main>
        <Title>lo</Title>
      </Main>
    </Container>
  );
}
const Container = styled.View`
  height: 60px;
  background-color: #333;
  flex-direction: row;
  justify-content: center;
`;
const Main = styled.View`
  justify-content: flex-end;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 42px;
  color: #fff;
  font-family: 'Monoton';
`;
const List = styled.Text`
  font-size: 16px;
  margin-left: 30px;
  margin-right: 20px;
  color: #fff;
`;

const Nav = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
