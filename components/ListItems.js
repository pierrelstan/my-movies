import React from 'react';
import { View, Image, SafeAreaView, FlatList } from 'react-native';
import styled from 'styled-components';
import Constants from 'expo-constants';

const Item = ({ name, image }) => (
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
      <Image
        source={image}
        style={{
          width: 100,
          height: 100,
          padding: 0,
          margin: 0,
          borderRadius: 50,
        }}
      />
    </View>
  </View>
);

export default function ListItems() {
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;

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
          data={data}
          renderItem={renderItem}
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

let data = [
  {
    id: 0,
    name: 'Product 1',
    image: require('../assets/bg_2.png'),
  },
  {
    id: 1,
    name: 'Product 2',
    image: require('../assets/bg_2.png'),
  },
  {
    id: 2,
    name: 'Product 3',
    image: require('../assets/bg_2.png'),
  },
  {
    id: 3,
    name: 'Product 4',
    image: require('../assets/bg_2.png'),
  },
  {
    id: 4,
    name: 'Product 5',
    image: require('../assets/bg_2.png'),
  },
];
