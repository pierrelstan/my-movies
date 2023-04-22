import * as React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
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
  background-color: #333;
  flex-direction: row;
  justify-content: center;
`;
const Main = styled.View`
  justify-content: flex-end;
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
  color: #fff;
`;

const Nav = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
