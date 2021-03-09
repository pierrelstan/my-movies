import React, { useEffect } from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getTrendingMovies } from '../redux/actions/trendingMoviesAction';
import { FlatList } from 'react-native-gesture-handler';
import renderItem from './ListItemsChildren';
import axiosService from '../assets/ServicesAxios/axiosService';
import MoviesSkeleton from './MoviesSkeleton';
import TitleSkeleton from './TitleSkeleton';

export default function TrendingMovies() {
  const dispatch = useDispatch();
  const { trendingMovies, isLoading } = useSelector((state) => ({
    trendingMovies: state.trendingMovies.trendingMovies,
    page: state.trendingMovies.page,
    totalPages: state.trendingMovies.totalPages,
    isLoading: state.trendingMovies.isLoading,
  }));

  useEffect(() => {
    dispatch(getTrendingMovies());
    return () => {
      axiosService.CancelToken;
    };
  }, []);

  // const memoizeRenderItem = React.useMemo(() => renderItem);
  return (
    <View>
      <View>{isLoading ? <TitleSkeleton /> : <Title>Trending Now</Title>}</View>

      {isLoading && <MoviesSkeleton />}
      {!isLoading && (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={trendingMovies}
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
