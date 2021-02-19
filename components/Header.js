import * as React from 'react';
import styled from 'styled-components';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
  return (
    <Container>
      <Main>
        <Title>Lo</Title>
      </Main>
      <Nav>
        <List>
          <Ionicons name='search' size={24} color='#fff' />
        </List>
        <List>
          <FontAwesome5 name='user-circle' size={24} color='#fff' />
        </List>
      </Nav>
    </Container>
  );
}
const Container = styled.View`
  height: 40px;
  background-color: #333;
  flex-direction: row;
  justify-content: space-between;
`;
const Main = styled.View`
  justify-content: flex-end;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 32px;
  color: #fff;
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
