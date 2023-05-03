import React, { memo } from "react";
import { StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { OpenItem } from "../redux/actions/openitemAction";
import { getItemModal } from "../redux/actions/itemModalAction";
import List from "./common/List";
import CarouselSkeleton from "./CarouselSkeleton";
import Loading from "./common/Loading";

const Item = memo(
  ({ title, image, id, description, voteCount, voteAverage, dateRelease }) => {
    const dispatch = useDispatch();

    const ToggleOpenItem = () => {
      dispatch(OpenItem());
      dispatch(
        getItemModal(
          id,
          image,
          description,
          title,
          voteCount,
          voteAverage,
          dateRelease
        )
      );
    };

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          ToggleOpenItem();
        }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${image}`,
          }}
          style={styles.item}
        />
      </TouchableOpacity>
    );
  }
);

const renderItem = ({ item }) => {
  return (
    <Item
      key={item.id}
      title={item.title}
      image={item.poster_path}
      id={item.id}
      description={item.overview}
      voteAverage={item.vote_average}
      voteCount={item.vote_count}
      dateRelease={item.release_date}
    />
  );
};

export default function ImageCarousel() {
  const { movies, isLoading } = useSelector((state) => ({
    movies: state.upcomingMovies.upcomingMovies,
    isLoading: state.upcomingMovies.isLoading,
  }));

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <List
          data={movies}
          refreshing={isLoading}
          onEndReachedThreshold={0.2}
          initialNumToRender={10}
          item={renderItem}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 20 },
  carousel: {
    aspectRatio: 1.5,
    flexGrow: 0,
    marginBottom: 20,
  },
  item: {
    flex: 1,
    width: 250,
    height: 380,
    margin: 10,
  },
  imageBackground: {
    flex: 2,
  },
});
