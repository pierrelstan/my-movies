import React, { useEffect } from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getTrendingMovies } from '../redux/actions/trendingMoviesAction';
import { FlatList } from 'react-native-gesture-handler';
import renderItem from './ListItemsChildren';
import { getMovies } from '../redux/actions/moviesAction';
import axiosService from '../assets/ServicesAxios/axiosService';

export default function MostPopularMovies() {
  const dispatch = useDispatch();
  const { movies, page, totalPages } = useSelector((state) => ({
    movies: state.movies.movies,
    page: state.movies.page,
    totalPages: state.movies.totalPages,
  }));

  useEffect(() => {
    dispatch(getMovies());
    return () => {
      axiosService.isCancel = axios.isCancel();
    };
  }, []);

  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        refreshing={true}
        onEndReached={() => {
          if (page < totalPages) {
            return dispatch(getMovies());
          }
        }}
        style={{
          margin: 0,
          padding: 0,
        }}
      />
    </View>
  );
}
