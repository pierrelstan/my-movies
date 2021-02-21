import React, { useRef, useEffect } from 'react';
import { Animated, TouchableOpacity, Dimensions, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { OpenItem, CloseItem } from '../redux/actions/openitemAction';

const ScreenHeight = Dimensions.get('window').height;

export default function Item({ image }) {
  const { action } = useSelector((state) => ({
    action: state.openitem.action,
  }));
  const dispatch = useDispatch();

  const TopAnim = useRef(new Animated.Value(ScreenHeight)).current;
  useEffect(() => {
    if (action == 'OPEN_ITEM') {
      Animated.spring(TopAnim, {
        toValue: Math.round(ScreenHeight) / 2,
        duration: 50,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(TopAnim, {
        toValue: ScreenHeight,
        useNativeDriver: true,
      }).start();
    }
  }, [action]);
  const toggleClose = () => {
    dispatch(CloseItem());
  };
  return (
    <AnimatedContainer style={{ transform: [{ translateY: TopAnim }] }}>
      <Content>
        <Logo />
        <ContainerClose>
          <CloseView>
            <TouchableOpacity onPress={() => toggleClose()}>
              <Ionicons name='ios-close' size={24} color='#333' />
            </TouchableOpacity>
          </CloseView>
        </ContainerClose>
        <Text>Stnle</Text>
      </Content>
    </AnimatedContainer>
  );
}

const Container = styled.View`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Logo = styled.Image``;
const Text = styled.Text``;
const Content = styled.View`
  height: ${Math.round(ScreenHeight)}px;
  background: #333;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
const ContainerClose = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 10px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  background: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
`;
