import React, { useEffect } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getTrendingMovies } from "../redux/actions/trendingMoviesAction";
import renderItem from "./RenderItem";
import axiosService from "../assets/ServicesAxios/axiosService";
import { Title } from "./styles/styles";
import TitleSkeleton from "./TitleSkeleton";
import MoviesSkeleton from "./MoviesSkeleton";
import List from "./common/List";

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
      <View>
        {isLoading && <TitleSkeleton />}
        {!isLoading && <Title>Trending Now</Title>}
      </View>
      {isLoading && <MoviesSkeleton />}
      {!isLoading && (
        <List
          data={trendingMovies}
          refreshing={isLoading}
          onEndReachedThreshold={0.2}
          initialNumToRender={10}
          item={renderItem}
        />
      )}
    </View>
  );
}
