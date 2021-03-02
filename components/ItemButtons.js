import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components';

function ItemButtons({ data, navigation }) {
  const handlePreviewVideo = (id) => {
    navigation.navigate('Trailer', { id: id });
  };
  const handleDetailsMovie = (data) => {
    const {
      id,
      image,
      description,
      title,
      voteCount,
      voteAverage,
      dateRelease,
    } = data;
    navigation.navigate('MovieScreen', {
      id,
      image,
      description,
      title,
      voteCount,
      voteAverage,
      dateRelease,
    });
  };
  return (
    <WrapperIcons>
      <TouchableOpacity onPress={() => handlePreviewVideo(data.id)}>
        <Button>
          <Ionicons name='play' size={24} color='#333' />
          <ButtonText>Play</ButtonText>
        </Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePreviewVideo(data.id)}>
        <ContainerIcons>
          <Feather name='play' size={24} color='#fff' />
          <TextIcon> Review</TextIcon>
        </ContainerIcons>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDetailsMovie(data)}>
        <ContainerIcons>
          <Feather name='info' size={24} color='#fff' />
          <TextIcon>Details &amp; More</TextIcon>
        </ContainerIcons>
      </TouchableOpacity>
    </WrapperIcons>
  );
}

export default ItemButtons;

const WrapperIcons = styled.View`
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 8px;
`;

const Button = styled.View`
  color: #333;
  background-color: #fff;
  padding: 10px 45px;
  flex-direction: row;
  justify-content: center;
  align-self: baseline;

  border-radius: 3px;
`;
const ButtonText = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

const TextIcon = styled.Text`
  font-size: 14px;
  color: #fff;
`;
const ContainerIcons = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
