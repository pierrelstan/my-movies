import React, { useCallback, useContext, useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import AppContext from "../context/AppContext";

const DisplayListColor = (props) => {
  const { favorites, setFavorites } = useContext(AppContext);

  const handleToggleFavorite = (data) => {
    if (favorites.favorites.includes(data.id)) {
      setFavorites({
        favorites: favorites.favorites.filter((favId) => favId !== data.id),
        ids: favorites.ids.filter((id) => id !== data.id),
      });
    } else {
      setFavorites({
        favorites: [...favorites.favorites, data],
        ids: [...favorites.ids, data.id],
      });
    }
  };

  const icons = favorites.ids.includes(props.data.id)
    ? "favorite"
    : "favorite-border";

  return (
    <ContainerIconsPlus>
      <Pressable onPress={() => handleToggleFavorite(props.data)}>
        <WrapperIconsPlus>
          <MaterialIcons name={icons} size={24} color="red" />
        </WrapperIconsPlus>
      </Pressable>
    </ContainerIconsPlus>
  );
};

function ItemButtons({ data }) {
  const navigation = useNavigation();

  const handlePreviewVideo = (id) => {
    navigation.navigate("PreviewVideo", { id: id });
  };

  return (
    <Container>
      <WrapperIcons>
        <TouchableOpacity onPress={() => handlePreviewVideo(data.id)}>
          <Feather name="play" size={24} color="#fff" />
        </TouchableOpacity>

        <ContainerIcons>
          <DisplayListColor data={data} />
        </ContainerIcons>
      </WrapperIcons>
    </Container>
  );
}

export default ItemButtons;

const Container = styled.View`
  margin-top: 40px;
`;
const ContainerIconsPlus = styled.View``;
const WrapperIconsPlus = styled.View`
  justify-content: center;
  align-items: center;
`;
const WrapperIcons = styled.View`
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
`;

const TextIcon = styled.Text`
  color: #fff;
`;
const ContainerIcons = styled.View`
  justify-content: center;
  align-items: center;
`;
