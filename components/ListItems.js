import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components';
import Constants from 'expo-constants';

export default function ListItems() {
  return (
    <SafeAreaView>
      <View>
        <ScrollView
          style={{
            marginHorizontal: 1,
            flexGrow: 1,
            marginBottom: 170,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {data.map(({ name, image, id }) => (
            <View key={id}>
              <Text>{name}</Text>
              <View>
                <Image
                  source={image}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                />
              </View>
            </View>
          ))}
        </ScrollView>
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
];
