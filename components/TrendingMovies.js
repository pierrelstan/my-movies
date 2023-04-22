import React, { useEffect } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getTrendingMovies } from "../redux/actions/trendingMoviesAction";
import { FlatList } from "react-native-gesture-handler";
import renderItem from "./ListItemsChildren";
import axiosService from "../assets/ServicesAxios/axiosService";
import { Title } from "./styles/styles";
import TitleSkeleton from "./TitleSkeleton";
import MoviesSkeleton from "./MoviesSkeleton";

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

  return (
    <View>
      <View></View>

      <View>
        {isLoading && <TitleSkeleton />}
        {!isLoading && <Title>Trending Now</Title>}
      </View>
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
