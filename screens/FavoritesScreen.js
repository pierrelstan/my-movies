import image from "../assets/imageLogo.jpg";
import Profile from "../components/common/Profile";
import { FavoritesContext } from "../context/FavoritesProvider";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {
	View,
	Dimensions,
	Image,
	Pressable,
	Text,
	StyleSheet,
	ScrollView
} from "react-native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

let numColumns = 2;
export default function FavoritesScreen() {
	const navigation = useNavigation();

	// const { listMovies, isLoading } = useSelector((state) => ({
	//   listMovies: state.ListMovies.trendingMovies,
	//   isLoading: state.trendingMovies.isLoading,
	// }));

	const { favorites, setFavorites } = useContext(FavoritesContext);

	const handleItemId = (item) => {
		const id = item.id;
		navigation.navigate("PreviewVideo", { id: id });
	};
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#24243C" barStyle="auto" />

			<View style={{ marginTop: 80 }}>
				<Profile />

				<View style={styles.wrapperText}>
					<Text style={[styles.title, styles.color.text]}>
						Favorites {favorites.length === 0 && "is empty"}
					</Text>

					<Pressable
						onPress={() => setFavorites([])}
						style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
					>
						<Text style={[styles.title, styles.color.text]}>Clear all</Text>
					</Pressable>
				</View>

				<View style={styles.wrapper}>
					<SafeAreaView>
						<FlatList
							data={favorites}
							numColumns={numColumns}
							keyExtractor={(item) => item.id}
							contentContainerStyle={{
								flexGrow: 1,
								justifyContent: "center"
							}}
							renderItem={({ item }) => {
								return (
									<Pressable
										onPress={() => {
											handleItemId(item);
										}}
										style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
									>
										<View
											key={item.id}
											style={{ justifyItems: "center", flex: 1 }}
										>
											{item.image ? (
												<Image
													style={{
														aspectRatio: 1.3 / numColumns,

														height: 300,
														resizeMode: "cover",
														marginVertical: 4,
														marginHorizontal: 1
													}}
													source={{
														uri: `https://image.tmdb.org/t/p/w500/${item.image}`
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
														marginVertical: 8
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
	container: { flex: 1, height: ScreenHeight, backgroundColor: "#24243C" },
	wrapper: {
		marginTop: 50
	},
	wrapperText: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 10
	},
	color: {
		text: {
			color: "#b6b133"
		}
	},
	title: {
		fontSize: 18,
		fontWeight: 900
	}
});
