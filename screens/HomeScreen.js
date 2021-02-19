import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import ListItems from '../components/ListItems';
import SubHeader from '../components/SubHeader';

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <SubHeader />
      {/* <BackgroundImage /> */}
      <Title>Trending Now</Title>
      <ListItems />
      <StatusBar style='dark' statusBarStyle='auto' />
    </View>
  );
}

const Title = styled.Text`
  font-size: 30px;
  margin: 4px;
`;
