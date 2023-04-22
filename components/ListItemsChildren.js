import React, { memo } from "react";
import { View, Dimensions, Pressable } from "react-native";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { OpenItem } from "../redux/actions/openitemAction";
import { getItemModal } from "../redux/actions/itemModalAction";
import logo from "../assets/imageLogo.jpg";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

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
      <View
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <ContainerImage>
          <Pressable
            onPress={() => ToggleOpenItem()}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
          >
            {image ? (
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500/${image}` }}
              />
            ) : (
              <Image source={logo} />
            )}
          </Pressable>
        </ContainerImage>
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
const Image = styled.Image`
  width: ${Math.round(screenWidth) >= 737 ? "300px" : "100px"};
  height: ${Math.round(screenWidth) >= 737 ? "450px" : "150px"};
  padding: 0;
  margin: 0;
  border-radius: 2px;
`;
const ContainerImage = styled.View`
  margin: 5px;
`;
