import React, { useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import renderItem from "./ListItemsChildren";
import { getUpcomingMovies } from "../redux/actions/upcomingMoviesAction";
import axiosService from "../assets/ServicesAxios/axiosService";
import MoviesSkeleton from "./MoviesSkeleton";
import TitleSkeleton from "./TitleSkeleton";
import { Title } from "./styles/styles";

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
      )}
    </View>
  );
}
