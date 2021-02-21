import React from 'react';
import {
  View,
  Image,
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

const Item = ({ name, image, id }) => {
  const dispatch = useDispatch();
  const TopAnim = React.useRef(new Animated.Value(1)).current;
  const { action } = useSelector((state) => ({
    action: state.openitem.action,
  }));
  const ToggleOpenItem = () => {
    console.log(id);

    dispatch(OpenItem());
  };
  return (
    <View
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <View
        style={{
          margin: 12,
          padding: 0,
          borderRadius: 150,
          borderColor: '#e3e3',
          borderWidth: 2,
        }}
      >
        <TouchableOpacity onPress={() => ToggleOpenItem()}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${image}` }}
            style={{
              width: 150,
              height: 150,
              padding: 0,
              margin: 0,
              borderRadius: 150,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function ListItems({ movies }) {
  const renderItem = ({ item }) => (
    <Item name={item.name} image={item.poster_path} id={item.id} />
  );

  return (
    <SafeAreaView>
      <View
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={movies}
          renderItem={renderItem}
          onEndReachedThreshold={0.5}
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
