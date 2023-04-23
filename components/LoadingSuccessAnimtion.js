import React, { Component } from 'react';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';
import { Animated, Dimensions, StatusBar } from 'react-native';

let screenHeight = Dimensions.get('window').height;

const LoadingSuccessAnimation = (props) => {
  const [top, setTop] = React.useState(new Animated.Value(0));
  const [opacity, setOpacity] = React.useState(new Animated.Value(0));

  let animation = React.useRef(null);

  React.useEffect(() => {
    // if (didMountRef.current) {
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
  }, [props.isActive]);

  return (
    <AnimatedContainer
      styled={{
        top: top,
        opacity: opacity,
      }}
    >
      <LottieView
        source={require('../assets/SVG/1918-loading-and-done.json')}
        autoPlay={false}
        loop={false}
        ref={animation}
      />
      <StatusBar backgroundColor='#24243C' barStyle='auto' />
    </AnimatedContainer>
  );
};

export default LoadingSuccessAnimation;
const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #24243c;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
