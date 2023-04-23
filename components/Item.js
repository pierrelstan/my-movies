import React, { useRef, useEffect } from "react";
import {
  Animated,
  Dimensions,
  View,
  SafeAreaView,
  Easing,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { CloseItem } from "../redux/actions/openitemAction";
import { useState } from "react";
import ItemButtons from "./ItemButtons";

const ScreenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("window").width;

function Item() {
  const [data, setData] = useState({});
  const navigation = useNavigation();
  const { action, item } = useSelector((state) => ({
    action: state.openitem.action,
    item: state.item,
  }));
  const dispatch = useDispatch();
  const TopAnim = useRef(new Animated.Value(ScreenHeight)).current;

  useEffect(() => {
    dispatch(CloseItem());
  }, []);

  useEffect(() => {
    if (action) {
      Animated.timing(TopAnim, {
        toValue: ScreenHeight / 3.5,
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
    <AnimatedContainer style={{ transform: [{ translateY: TopAnim }] }}>
      <SafeAreaView>
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#2b2c4c",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Pressable
            onPress={() => toggleClose()}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
          >
            <ContainerClose>
              <CloseView>
                <Ionicons name="ios-close" size={24} color="#fff" />
              </CloseView>
            </ContainerClose>
          </Pressable>
          <Wrapper>
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
              <Text numberOfLines={3}>{data.description}</Text>
            </View>
          </Wrapper>
          <ItemButtons data={data} />
        </View>
      </SafeAreaView>
    </AnimatedContainer>
  );
}

const ItemMemo = React.memo(Item, () => {});
export default ItemMemo;

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-horizontal: 10px;
`;
const Container = styled.View`
  position: absolute;
  background-color: #2b2c4c;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Text = styled.Text`
  color: #fff;
  font-size: ${Math.round(screenWidth) >= 737 ? "24px" : "13px"};
  font-style: italic;
`;
const Content = styled.View``;
const ContainerClose = styled.View`
  margin-top: 10px;
  position: relative;
  left: ${screenWidth - 50}px;
`;

const CloseView = styled.View`
  width: 34px;
  height: 34px;
  background: #53565c;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Image = styled.Image`
  height: 250px;
  padding: 0;
  margin: 0;
`;
