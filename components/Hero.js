import React, { useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getLatestMovie } from '../redux/actions/latestMovieAction';

export default function Hero() {
  const dispatch = useDispatch();

  const { lastMovie } = useSelector((state) => ({
    lastMovie: state.lastMovie.lastMovie,
  }));

  useEffect(() => {
    dispatch(getLatestMovie());
  }, []);
  return (
    <View>
      {lastMovie.poster_path === null ? (
        <Image
          source={require('../assets/back_bg.jpg')}
          style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
            height: 380,
            width: 'auto',
          }}
        />
      ) : (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${lastMovie.poster_path}`,
          }}
          style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
            height: 380,
            width: 'auto',
          }}
        />
      )}
      <View>
        <Text>{lastMovie.description}</Text>
      </View>
    </View>
  );
}
