import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';
import styled from 'styled-components';
import Constants from 'expo-constants';
import { useDispatch, useSelector } from 'react-redux';
import { OpenItem, CloseItem } from '../redux/actions/openitemAction';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getItemModal } from '../redux/actions/itemModalAction';

const Item = ({ name, image, id, description }) => {
  const dispatch = useDispatch();

  const ToggleOpenItem = () => {
    dispatch(OpenItem());
    dispatch(getItemModal(id, image, description));
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
export default function ListItems({ movies }) {
  return (
    <SafeAreaView>
      <View
        style={{
          margin: 0,
          padding: 0,
          flex: 1,
        }}
      >
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={movies}
          renderItem={renderItem}
          onEndReachedThreshold={0.5}
          keyExtractor={(item) => item.id.toString()}
          keyExtractor={(item) => item.id.toString()}
          style={{
            margin: 0,
            padding: 0,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

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
