import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Asset } from 'expo-asset';
import styled from 'styled-components';

export default function BackgroundImage() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}
    >
      <ImageBackground
        source={require('../assets/bg_2.png')}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          height: 380,
          width: 'auto',
        }}
      ></ImageBackground>
    </View>
  );
}
