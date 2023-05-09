import React, { useContext } from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FavoritesContext } from "../context/FavoritesProvider";

const DisplayListColor = (props) => {
	const { favorites, setFavorites } = useContext(FavoritesContext);

	const handleToggleFavorite = (data) => {
		if (favorites.includes(data)) {
			let filter = favorites.filter((item) => item.id !== data.id);
			setFavorites(filter);
		} else {
			setFavorites(favorites.concat(data));
		}
	};
	console.log(favorites);

	const icons = favorites.includes(props.data) ? "favorite" : "favorite-border";
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
