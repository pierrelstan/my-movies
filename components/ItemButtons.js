import React, { useContext } from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AppContext from "../context/AppContext";

const DisplayListColor = (props) => {
  const { favorites, setFavorites } = useContext(AppContext);

  const handleToggleFavorite = (data) => {
    if (favorites.favorites.includes(data.id)) {
      setFavorites({
        favorites: favorites.favorites.filter((favId) => favId !== data.id),
      });
    } else {
      setFavorites({
        favorites: [...favorites.favorites, data.id],
      });
    }
  };

  const icons = favorites.favorites.includes(props.data.id)
    ? "favorite"
    : "favorite-border";

  return (
    <Pressable onPress={() => handleToggleFavorite(props.data)}>
      <MaterialIcons name={icons} size={24} color="red" />
    </Pressable>
  );
};

function ItemButtons({ data }) {
  const navigation = useNavigation();

  const handlePreviewVideo = (id) => {
    navigation.navigate("PreviewVideo", { id: id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperIcons}>
        <TouchableOpacity onPress={() => handlePreviewVideo(data.id)}>
          <Feather name="play" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.icons}>
          <DisplayListColor data={data} />
        </View>
      </View>
    </View>
  );
}

export default ItemButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  icons: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperIcons: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
