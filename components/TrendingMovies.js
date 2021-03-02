import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getTrendingMovies } from '../redux/actions/trendingMoviesAction';
import { FlatList } from 'react-native-gesture-handler';
import renderItem from './ListItemsChildren';
import axiosService from '../assets/ServicesAxios/axiosService';

export default function TrendingMovies() {
  const dispatch = useDispatch();
  const { trendingMovies, page, totalPages } = useSelector((state) => ({
    trendingMovies: state.trendingMovies.trendingMovies,
    page: state.trendingMovies.page,
    totalPages: state.trendingMovies.totalPages,
  }));

  useEffect(() => {
    dispatch(getTrendingMovies());
    return () => {
      axiosService.isCancel = axios.isCancel();
    };
  }, []);
  // const memoizeRenderItem = React.useMemo(() => renderItem);
  return (
    <View>
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
    </View>
  );
}
