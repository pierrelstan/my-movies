import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  Share,
} from 'react-native';
import styled from 'styled-components';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Ionicons } from 'react-native-vector-icons';
import { getMovie } from '../redux/actions/movieAction';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import imagelogo from '../assets/imageLogo.jpg';
import addToListAction from '../redux/actions/addToListAction';

const { height: ScreenHeight, width: ScreenWidth } = Dimensions.get('window');

const DisplayListColor = ({ id }) => {
  const [active, setActive] = useState(false);
  const { listMovies } = useSelector((state) => ({
    listMovies: state.listMovies.listMovies,
  }));
  useEffect(() => {
    function fv() {
      let index = listMovies.findIndex((item) => item.id === id) !== -1;
      setActive(index);
    }
    fv();
  }, [listMovies.length]);

  return (
    <View>
      {active === true ? (
        <Ionicons name='checkmark-done-outline' color='#B6B133' size={26} />
      ) : (
        <Ionicons name='checkmark-outline' color='#fff' size={26} />
      )}
    </View>
  );
};

export default function MovieScreen({ route, navigation }) {
  const {
    id,
    image,
    description,
    title,
    voteCount,
    voteAverage,
    dateRelease,
  } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT,
      );
    }
    navigation.addListener('focus', () => {
      changeScreenOrientation();
      dispatch(getMovie(id));
    }),
      [id];
  });

  const _shareFilm = () => {
    Share.share({
      title: title,
      message: description,
    });
  };

  const toggleList = (
    id,
    image,
    description,
    title,
    voteCount,
    voteAverage,
    dateRelease,
  ) => {
    let item = {
      id: id,
      poster_path: image,
      overview: description,
      title: title,
      vote_count: voteCount,
      vote_average: voteAverage,
      release_date: dateRelease,
    };
    dispatch(addToListAction(item));
  };
  const handlePreviewVideo = (id) => {
    navigation.navigate('Trailer', { id: id });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          {image ? (
            <ImageBackground
              style={{
                resizeMode: 'cover',
                width: ScreenWidth,
                height: 300,
                // flex: 1,
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${image}`,
              }}
            />
          ) : (
            <ImageBackground
              style={{
                resizeMode: 'cover',
                width: ScreenWidth,
                height: 300,
                // flex: 1,
              }}
              source={imagelogo}
            />
          )}
          <Wrapper>
            <ContainerIcons>
              <TouchableOpacity
                onPress={() =>
                  toggleList(
                    id,
                    image,
                    description,
                    title,
                    voteCount,
                    voteAverage,
                    dateRelease,
                  )
                }
                accessible={true}
                accessibilityLabel='Add to list!'
              >
                <DisplayListColor id={id} />
              </TouchableOpacity>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel='Play'
                onPress={() => handlePreviewVideo(id)}
              >
                <Ionicons name='play-outline' size={32} color='#B6B133' />
              </TouchableOpacity>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel='Share'
                onPress={() => _shareFilm()}
              >
                <Ionicons
                  name='share-social-outline'
                  size={32}
                  color='#B6B133'
                />
              </TouchableOpacity>
            </ContainerIcons>
          </Wrapper>
          <Content>
            <View>
              <Title>{title}</Title>
            </View>
            <View
              style={{
                marginHorizontal: 10,
              }}
            >
              <Description>{description}</Description>
            </View>
            <View style={{ flex: 1, margin: 10 }}>
              <Text>released on : {dateRelease}</Text>
              <Text>average : {voteAverage}</Text>
              <Text>Number of votes: {voteCount}</Text>
            </View>
          </Content>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  color: #b6b133;
`;
const Container = styled.View`
  background-color: #24243c;
  height: ${ScreenHeight}px;
`;
const Content = styled.View`
  color: #fff;
`;
const Wrapper = styled.View`
  background-color: #383958bf;
`;
const Text = styled.Text`
  font-weight: bold;
  color: #fff;
`;
const Description = styled.Text`
  color: #fff;
`;
const ContainerIcons = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  position: absolute;
  z-index: 0;
  top: -55px;
  bottom: 0;
  left: 0;
  right: 0;

  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  padding: 10px;
`;
const Button = styled.Text`
  color: #333;
  background-color: #fff;
  padding: 10px 45px;
  flex-direction: row;
  justify-content: center;
  align-self: baseline;

  border-radius: 3px;
`;

const TextIcon = styled.Text`
  font-size: 14px;
  color: #333;
`;
