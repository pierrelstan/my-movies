import React from 'react';
import { View, Dimensions } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components';
import Avatar from '../components/Avatar';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { height: ScreenHeight, width: ScreeWidth } = Dimensions.get('screen');
export default function ProfileScreen({ navigation }) {
  const handleLogout = () => {
    const clearAll = async () => {
      try {
        await AsyncStorage.clear();
        navigation.push('Login');
      } catch (e) {
        // clear error
      }

      console.log('Done.');
    };
    clearAll();
  };
  return (
    <Container>
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <WrapperAvatar>
          <Avatar />
          <ContainerTitle>
            <TitleAvatar>Stanley</TitleAvatar>
            <Email>test@gmail.com</Email>
            <ButtonLogout onPress={() => handleLogout()}>Log out</ButtonLogout>
          </ContainerTitle>
        </WrapperAvatar>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('MyList')}>
          <Button>
            <Ionicons name='checkmark-outline' color='#b6b133' size={26} />

            <ButtonText>My List</ButtonText>
          </Button>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const Container = styled.View`
  background-color: #24243c;
  height: ${ScreenHeight}px;
  flex-direction: column;
`;

const TitleAvatar = styled.Text`
  font-size: 18px;
  color: #b6b133;
`;
const WrapperAvatar = styled.View`
  justify-content: flex-start;
  margin: 10px;
  flex-direction: row;
  margin-top: 30px;
`;
const Button = styled.View`
  align-items: center;
  width: ${ScreeWidth}px;
  flex-direction: row;
  padding: 5px;
  background-color: #383958;
  margin: 6px;
`;
const ButtonText = styled.Text`
  color: #b6b133;
  margin: 10px;
`;
const ButtonLogout = styled.Text`
  color: #b6b133;
  padding: 10px;
  background-color: #383958;
  margin: 6px;
  text-align: center;
  border-radius: 5px;
`;
const ContainerTitle = styled.View`
  margin-left: 50px;
`;
const Email = styled.Text`
  font-size: 18px;
  color: #666;
`;
