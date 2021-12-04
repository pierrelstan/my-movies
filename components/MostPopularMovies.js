import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import renderItem from './ListItemsChildren';
import { getMostPopularMovies } from '../redux/actions/moviesAction';
import axiosService from '../assets/ServicesAxios/axiosService';
import MoviesSkeleton from './MoviesSkeleton';
import TitleSkeleton from './TitleSkeleton';
import { Title } from './styles/styles';

export default function MostPopularMovies() {
  const dispatch = useDispatch();
  const { movies, isLoading } = useSelector((state) => ({
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
