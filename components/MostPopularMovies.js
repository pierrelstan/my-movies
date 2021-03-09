import React, { useEffect } from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getTrendingMovies } from '../redux/actions/trendingMoviesAction';
import { FlatList } from 'react-native-gesture-handler';
import renderItem from './ListItemsChildren';
import { getMostPopularMovies } from '../redux/actions/moviesAction';
import axiosService from '../assets/ServicesAxios/axiosService';
import MoviesSkeleton from './MoviesSkeleton';
import TitleSkeleton from './TitleSkeleton';

export default function MostPopularMovies() {
  const dispatch = useDispatch();
  const { movies, page, totalPages, isLoading } = useSelector((state) => ({
    movies: state.movies.movies,
    page: state.movies.page,
    totalPages: state.movies.totalPages,
    isLoading: state.movies.isLoading,
  }));

  useEffect(() => {
    dispatch(getMostPopularMovies());

    return () => {
      axiosService.CancelToken;
    };
  }, []);

  // const memoizeRenderItem = React.useMemo(() => renderItem);
  return (
    <View>
      <View>
        {isLoading && <TitleSkeleton />}
        {!isLoading && <Title>Most Popular</Title>}
      </View>
      {isLoading && <MoviesSkeleton />}
      {!isLoading && (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
          refreshing={true}
          style={{
            margin: 0,
            padding: 0,
          }}
        />
      )}
    </View>
  );
}

const Title = styled.Text`
  font-size: 18px;
  margin: 4px;
  font-weight: bold;
  color: #b6b133;
`;
