import React, { useRef, useEffect } from 'react';
import {
  Animated,
  TouchableOpacity,
  Dimensions,
  View,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { OpenItem, CloseItem } from '../redux/actions/openitemAction';

const ScreenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function Item() {
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
      if (action == 'OPEN_ITEM') {
        Animated.spring(TopAnim, {
          toValue: Math.round(ScreenHeight) / 2.3,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.spring(TopAnim, {
          toValue: ScreenHeight,
          useNativeDriver: true,
        }).start();
      }
    }
    return () => {
      mounted = false;
    };
  }, [action]);
  const toggleClose = () => {
    dispatch(CloseItem());
  };
  const handlePreviewVideo = (id) => {
    navigation.navigate('Trailer', { id: id });
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
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 0,
            }}
          >
            <View
              style={{
                flex: 3,
                margin: 10,
              }}
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${item.image}`,
                }}
              />
            </View>
            <View
              style={{
                flex: 7,
                margin: 1,
                padding: 0,
              }}
            >
              <Text numberOfLines={3}>{item.description}</Text>
            </View>
          </View>

          <WrapperIcons>
            <TouchableOpacity onPress={() => handlePreviewVideo(item.id)}>
              <Button>
                <Ionicons name='play' size={24} color='#333' />
                <ButtonText>Play</ButtonText>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePreviewVideo(item.id)}>
              <ContainerIcons>
                <Feather name='play' size={24} color='#fff' />
                <TextIcon> Review</TextIcon>
              </ContainerIcons>
            </TouchableOpacity>
            <ContainerIcons>
              <Feather name='info' size={24} color='#fff' />
              <TextIcon>Details &amp; More</TextIcon>
            </ContainerIcons>
          </WrapperIcons>
        </Content>
      </SafeAreaView>
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
const Text = styled.Text`
  color: #fff;
  font-size: 13px;
  font-style: italic;
  width: 200px;
`;
const Content = styled.View`
  height: ${Math.round(ScreenHeight)}px;
  background: #333;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
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
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
`;

const WrapperIcons = styled.View`
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 8px;
`;
const Image = styled.Image`
  width: 100px;
  height: 150px;
  padding: 0;
  margin: 0;
  border-radius: 2px;
`;

const Button = styled.View`
  color: #333;
  background-color: #fff;
  padding: 10px 45px;
  flex-direction: row;
  justify-content: center;
  align-self: baseline;

  border-radius: 3px;
`;
const ButtonText = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

const TextIcon = styled.Text`
  font-size: 14px;
  color: #fff;
`;
const ContainerIcons = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
