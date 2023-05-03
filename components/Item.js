import React, { useRef, useEffect } from "react";
import {
  Animated,
  Dimensions,
  View,
  SafeAreaView,
  Easing,
  Pressable,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { CloseItem } from "../redux/actions/openitemAction";
import { useState } from "react";
import ItemButtons from "./ItemButtons";

const ScreenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("window").width;
function Item() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const TopAnim = useRef(new Animated.Value(ScreenHeight)).current;

  const { action, item } = useSelector((state) => ({
    action: state.openitem.action,
    item: state.item,
  }));

  useEffect(() => {
    dispatch(CloseItem());
  }, []);

  useEffect(() => {
    if (action) {
      Animated.timing(TopAnim, {
        toValue: ScreenHeight / 5.5,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(TopAnim, {
        toValue: ScreenHeight,
        duration: 100,
        easing: Easing.back(),
        useNativeDriver: true,
      }).start();
    }

    setData(item);
    return () => {
      setData({});
    };
  }, [action, item]);

  const toggleClose = () => {
    dispatch(CloseItem());
  };

  return (
    <Animated.View
      style={{
        transform: [{ translateY: TopAnim }],
        ...styles.container,
      }}
    >
      <SafeAreaView>
        <View style={styles.wrapper}>
          <Pressable
            onPress={() => toggleClose()}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
          >
            <View style={styles.wrapperClose}>
              <View style={styles.closeView}>
                <Ionicons name="ios-close" size={24} color="#fff" />
              </View>
            </View>
          </Pressable>
          <View style={styles.content}>
            <Image
              style={{
                aspectRatio: 1,
                height: ScreenHeight / 2.5,
                resizeMode: "contain",
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${data.image}`,
              }}
            />

            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text numberOfLines={3} style={{ color: "#fff" }}>
                {data.description}
              </Text>
            </View>
          </View>
          <ItemButtons data={data} />
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

const ItemMemo = React.memo(Item, () => {});
export default ItemMemo;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#2b2c4c",
    width: "100%",
    height: "100%",
    zIndex: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2b2c4c",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  closeView: {
    width: 34,
    height: 34,
    backgroundColor: "#53565c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },
  image: {
    height: "250px",
    padding: 0,
    margin: 0,
  },
  wrapperClose: {
    marginTop: 10,
    position: "relative",
    left: screenWidth - 50,
  },
  image: {
    height: 250,
    padding: 0,
    margin: 0,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontStyle: "italic",
  },
});
