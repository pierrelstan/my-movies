import React, { useEffect } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getTrendingMovies } from "../redux/actions/trendingMoviesAction";
import renderItem from "./RenderItem";
import axiosService from "../utils/ServicesAxios/axiosService";

import TitleSkeleton from "./TitleSkeleton";
import MoviesSkeleton from "./MoviesSkeleton";
import List from "./common/List";
import Loading from "./common/Loading";
import Title from "./common/Title";

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
        {!isLoading && <Title title="Trending Now" />}
      </View>
      {isLoading && <Loading />}
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
