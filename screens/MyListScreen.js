import React, { useContext } from "react";
import {
  View,
  Dimensions,
  Image,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";
import { FlatList } from "react-native";
import image from "../assets/imageLogo.jpg";
import Profile from "../components/common/Profile";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";

const { width: ScreenWidth } = Dimensions.get("window");

let numColumns = 2;
export default function MyList() {
  const navigation = useNavigation();

  const { favorites, setFavorites } = useContext(AppContext);
  console.log(favorites);

  const handleItemId = (item) => {
    const id = item.id;
    navigation.navigate("PreviewVideo", { id: id });
  };
  return (
    <View style={styles.container}>
      <View>
        <Profile />
        <View style={styles.wrapperText}>
          <Text style={[styles.title, styles.color.text]}>
            Favorites {favorites.favorites.length === 0 && "is empty"}
          </Text>
          <Pressable
            onPress={() =>
              setFavorites({
                favorites: [],
                ids: [],
              })
            }
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
          >
            <Text style={[styles.title, styles.color.text]}>Clear all</Text>
          </Pressable>
        </View>

        <View style={styles.wrapper}>
          <SafeAreaView>
            <FlatList
              data={favorites.favorites}
              numColumns={numColumns}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
              renderItem={({ item }) => {
                return (
                  <Pressable
                    onPress={() => {
                      handleItemId(item);
                    }}
                    style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
                  >
                    <View key={item.id} style={{ justifyContent: "center" }}>
                      {item.image ? (
                        <Image
                          style={{
                            aspectRatio:
                              Math.round(ScreenWidth) <= 360
                                ? 0.5
                                : Math.round(ScreenWidth)
                                ? 0.7
                                : 1,
                            flex: 1 / numColumns,
                            width: 50,
                            height: 300,
                            resizeMode: "cover",
                            marginVertical: 4,
                            marginHorizontal: 3,
                            marginLeft:
                              Math.round(ScreenWidth) <= 360 ? 20 : 10,
                            marginRight: 0,
                          }}
                          source={{
                            uri: `https://image.tmdb.org/t/p/w500/${item.image}`,
                          }}
                        />
                      ) : (
                        <Image
                          source={image}
                          style={{
                            aspectRatio:
                              Math.round(ScreenWidth) <= 360
                                ? 0.5
                                : Math.round(ScreenWidth)
                                ? 0.7
                                : 1,
                            flex: 1 / numColumns,
                            width: 40,
                            height: 150,
                            resizeMode: "contain",
                            marginVertical: 8,
                          }}
                        />
                      )}
                    </View>
                  </Pressable>
                );
              }}
            />
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#24243C" },
  wrapper: {
    marginTop: 50,
  },
  wrapperText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  color: {
    text: {
      color: "#b6b133",
    },
  },
  title: {
    fontSize: 18,
    fontWeight: 900,
  },
});
