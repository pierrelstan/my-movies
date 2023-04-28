import React, { useEffect } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import renderItem from "./RenderItem";
import { getUpcomingMovies } from "../redux/actions/upcomingMoviesAction";
import axiosService from "../assets/ServicesAxios/axiosService";
import MoviesSkeleton from "./MoviesSkeleton";
import TitleSkeleton from "./TitleSkeleton";
import { Title } from "./styles/styles";
import List from "./common/List";

export default function UpcomingMovies() {
  const dispatch = useDispatch();
  const { upcomingMovies, isLoading } = useSelector((state) => ({
    upcomingMovies: state.upcomingMovies.upcomingMovies,
    page: state.upcomingMovies.page,
    totalPages: state.upcomingMovies.totalPages,
    isLoading: state.upcomingMovies.isLoading,
  }));

  useEffect(() => {
    dispatch(getUpcomingMovies());
    return () => {
      axiosService.CancelToken;
    };
  }, []);

  return (
    <View>
      <View>
        {isLoading ? <TitleSkeleton /> : <Title>Upcoming Movies</Title>}
      </View>
      {isLoading ? (
        <MoviesSkeleton />
      ) : (
        <List
          data={upcomingMovies}
          refreshing={isLoading}
          onEndReachedThreshold={0.2}
          initialNumToRender={10}
          item={renderItem}
        />
      )}
    </View>
  );
}
