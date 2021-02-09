import * as React from 'react';
import styled from 'styled-components';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <Container>
      <Main>
        <Title>Lo</Title>
      </Main>
      <Nav>
        <List>Tv Shows</List>
        <List>Movies</List>
        <List>My List</List>
      </Nav>
    </Container>
  );
}
const Container = styled.View`
  height: 40px;
  background-color: #fff;
  margin-top: ${Constants.statusBarHeight}px;
  flex-direction: row;
  justify-content: space-around;
`;
const Main = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 32px;
  color: #333;
`;
const List = styled.Text`
  font-size: 16px;
  margin-left: 30px;
  margin-right: 20px;
  color: #333;
`;

const Nav = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
