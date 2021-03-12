import React, { useRef, useEffect } from 'react';
import {
  Animated,
  TouchableOpacity,
  Dimensions,
  View,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { CloseItem } from '../redux/actions/openitemAction';
import { useState } from 'react';
import ItemButtons from './ItemButtons';

const ScreenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('window').width;

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
    let mounted = true;
    if (mounted) {
      if (action === true) {
        Animated.spring(TopAnim, {
          toValue: Math.round(ScreenHeight) / 2.9,
          duration: 0,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.spring(TopAnim, {
          toValue: ScreenHeight,
          duration: 0,
          useNativeDriver: true,
        }).start();
      }
    }
    setData(item);
    return () => {
      mounted = false;
      setData({});
    };
  }, [action, item]);

  const toggleClose = () => {
    dispatch(CloseItem());
  };
  return (
    <AnimatedContainer style={{ transform: [{ translateY: TopAnim }] }}>
      <SafeAreaView>
        <Content>
          <Logo />
          <ContainerClose>
            <CloseView>
              <TouchableOpacity onPress={() => toggleClose()}>
                <Ionicons name='ios-close' size={24} color='#fff' />
              </TouchableOpacity>
            </CloseView>
          </ContainerClose>
          <Wrapper>
            <View
              style={{
                flex: 3,
                margin: 10,
              }}
            >
              <Image
                style={{
                  resizeMode: 'contain',
                }}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${data.image}`,
                }}
              />
            </View>
            <View
              style={{
                flex: Math.round(ScreenHeight) >= 737 ? 4 : 7,
                margin: 1,
                padding: 0,
              }}
            >
              <Text numberOfLines={3}>{data.description}</Text>
            </View>
          </Wrapper>

          <ItemButtons data={data} navigation={navigation} />
        </Content>
      </SafeAreaView>
    </AnimatedContainer>
  );
}

const ItemMemo = React.memo(Item, () => {});
export default ItemMemo;
const Wrapper = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0;
`;
const Container = styled.View`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Logo = styled.Image``;
const Text = styled.Text`
  color: #fff;
  font-size: ${Math.round(screenWidth) >= 737 ? '24px' : '13px'};
  font-style: italic;
  width: ${Math.round(screenWidth) >= 737 ? '400px' : '200px'};
`;
const Content = styled.View`
  height: ${Math.round(ScreenHeight)}px;
  background: #2b2c4c;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 5px;
`;
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
  width: ${Math.round(screenWidth) >= 737 ? '300px' : '100px'};
  height: ${Math.round(ScreenHeight) >= 737 ? '350px' : '150px'};
  padding: 0;
  margin: 0;
  border-radius: 2px;
`;
