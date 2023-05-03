import React, { Component, useEffect } from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";
import { Animated, Dimensions, StatusBar } from "react-native";

let screenHeight = Dimensions.get("window").height;

const LoadingSuccessAnimation = (props) => {
  const [top] = React.useState(new Animated.Value(0));
  const [opacity] = React.useState(new Animated.Value(0));

  let animation = React.useRef(null);

  useEffect(() => {
    if (props.active) {
      Animated.sequence([
        Animated.timing(top, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
      ]).start();
      animation.current.play();
    } else {
      Animated.sequence([
        Animated.timing(top, {
          toValue: screenHeight,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
      ]).start();
      animation.current.loop = false;
    }
  }, [props.active]);

  return (
    <Animated.View
      styled={[
        {
          top: top,
          opacity: opacity,
        },
        {
          width: "100%",
          height: "100%",
          background: "#24243c",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
        },
      ]}
    >
      <LottieView
        source={require("../assets/SVG/1918-loading-and-done.json")}
        autoPlay={false}
        loop={false}
        ref={animation}
      />
      <StatusBar backgroundColor="#24243C" barStyle="auto" />
    </Animated.View>
  );
};

export default LoadingSuccessAnimation;
