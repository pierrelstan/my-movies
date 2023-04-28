import React from "react";
import {
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import ItemMemo from "../components/Item";
import TrendingMovies from "../components/TrendingMovies";
import MostPopularMovies from "../components/MostPopularMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import Profile from "../components/common/Profile";
import ImageCarousel from "../components/Carousel";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#24243C",
          height: 80,
          justifyContent: "flex-end",
        }}
      >
        <Profile />
      </View>
      <ScrollView
        style={{
          backgroundColor: "#24243C",
        }}
      >
        <ImageCarousel />

        <View
          style={{
            flex: 1,
          }}
        >
          <TrendingMovies />
          <MostPopularMovies />
          <UpcomingMovies />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#24243C" statusBarStyle="auto" />
      <ItemMemo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24243C",
    paddingVertical: 30,
  },
});
