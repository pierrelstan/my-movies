import React, { useEffect } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import renderItem from './ListItemsChildren';
import { getUpcomingMovies } from '../redux/actions/upcomingMoviesAction';
import axiosService from '../assets/ServicesAxios/axiosService';

export default function UpcomingMovies() {
  const dispatch = useDispatch();
  const { upcomingMovies } = useSelector((state) => ({
    upcomingMovies: state.upcomingMovies.upcomingMovies,
    page: state.upcomingMovies.page,
    totalPages: state.upcomingMovies.totalPages,
  }));

  useEffect(() => {
    dispatch(getUpcomingMovies());
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
        data={upcomingMovies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.2}
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
