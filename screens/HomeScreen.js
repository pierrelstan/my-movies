import React from "react";
import { View, StatusBar, SafeAreaView, ScrollView } from "react-native";
import ItemMemo from "../components/Item";
import CarouselHero from "../components/Carousel";
import TrendingMovies from "../components/TrendingMovies";
import MostPopularMovies from "../components/MostPopularMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import Profile from "../components/common/Profile";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#24243C",
          height: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "#24243C",
            height: 80,
            justifyContent: "flex-end",
          }}
        >
          <Profile navigation={navigation} />
        </View>

        <ScrollView
          contentContainerStyle={{
            backgroundColor: "#24243C",
          }}
        >
          <CarouselHero />
          <View
            style={{
              height: "100%",
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
    </SafeAreaView>
  );
}
