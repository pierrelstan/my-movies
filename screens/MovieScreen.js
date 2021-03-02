import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, Dimensions, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { getMovie } from '../redux/actions/movieAction';
import { ScrollView } from 'react-native-gesture-handler';
import imagelogo from '../assets/imageLogo.jpg';

const { height: ScreenHeight } = Dimensions.get('window');

export default function MovieScreen({ route, navigation }) {
  const {
    id,
    image,
    description,
    title,
    voteCount,
    voteAverage,
    dateRelease,
  } = route.params;
  const dispatch = useDispatch();

  useEffect(
    () => navigation.addListener('focus', () => dispatch(getMovie(id))),
    [id],
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#444',
            height: ScreenHeight,
          }}
        >
          {image ? (
            <Image
              style={{
                resizeMode: 'cover',
                width: '100%',
                height: 300,
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${image}`,
              }}
            />
          ) : (
            <Image
              style={{
                resizeMode: 'cover',
                width: '100%',
                height: 300,
              }}
              source={imagelogo}
            />
          )}
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                color: '#fff',
              }}
            >
              {title}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 10,
            }}
          >
            <Description>{description}</Description>
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <Text>released on : {dateRelease}</Text>
            <Text>average : {voteAverage}</Text>
            <Text>Number of votes: {voteCount}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Text = styled.Text`
  font-weight: bold;
  color: #fff;
`;
const Description = styled.Text`
  color: #fff;
`;
