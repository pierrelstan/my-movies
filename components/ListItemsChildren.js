import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { OpenItem } from '../redux/actions/openitemAction';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getItemModal } from '../redux/actions/itemModalAction';

const Item = ({ image, id, description }) => {
  const dispatch = useDispatch();

  const ToggleOpenItem = () => {
    Promise.all([
      dispatch(OpenItem()),
      dispatch(getItemModal(id, image, description)),
    ]);
  };

  return (
    <View
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <ContainerImage>
        <TouchableOpacity onPress={() => ToggleOpenItem()}>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${image}` }} />
        </TouchableOpacity>
      </ContainerImage>
    </View>
  );
};
const renderItem = ({ item }) => {
  return (
    <Item
      name={item.name}
      image={item.poster_path}
      id={item.id}
      description={item.overview}
    />
  );
};

export default renderItem;
const Image = styled.Image`
  width: 100px;
  height: 150px;
  padding: 0;
  margin: 0;
  border-radius: 2px;
`;
const ContainerImage = styled.View`
  margin: 5px;
`;
