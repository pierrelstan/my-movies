import React, { memo } from "react";
import { View, Dimensions, Pressable, StyleSheet, Image } from "react-native";
import { useDispatch } from "react-redux";
import { OpenItem } from "../redux/actions/openitemAction";
import { getItemModal } from "../redux/actions/itemModalAction";
import logo from "../assets/imageLogo.jpg";

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
      <View className={styles.container}>
        <Pressable
          onPress={() => ToggleOpenItem()}
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
        >
          {image ? (
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500/${image}` }}
              style={{
                width: 100,
                height: 150,
                margin: 5,
                borderRadius: 2,
              }}
            />
          ) : (
            <Image source={logo} />
          )}
        </Pressable>
      </View>
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
export default renderItem;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});
