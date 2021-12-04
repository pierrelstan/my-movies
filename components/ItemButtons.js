import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components';
import addToListAction from '../redux/actions/addToListAction';

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
    <ContainerIconsPlus>
      {active === true ? (
        <WrapperIconsPlus>
          <Feather name='bookmark' size={24} color='#B6B133' />
          <TextIcon>Remove to list</TextIcon>
        </WrapperIconsPlus>
      ) : (
        <WrapperIconsPlus>
          <Feather name='bookmark' size={24} color='#fff' />
          <TextIcon>Add to list</TextIcon>
        </WrapperIconsPlus>
      )}
    </ContainerIconsPlus>
  );
};

function ItemButtons({ data, navigation }) {
  const dispatch = useDispatch();

  const handlePreviewVideo = (id) => {
    navigation.navigate('Trailer', { id: id });
  };
  const handleDetailsMovie = (data) => {
    const {
      id,
      image,
      description,
      title,
      voteCount,
      voteAverage,
      dateRelease,
    } = data;
    navigation.navigate('MovieScreen', {
      id,
      image,
      description,
      title,
      voteCount,
      voteAverage,
      dateRelease,
    });
  };

  const toggleList = ({
    id,
    image,
    description,
    title,
    voteCount,
    voteAverage,
    dateRelease,
  }) => {
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
  return (
    <Container>
      <WrapperIcons>
        <TouchableOpacity onPress={() => handlePreviewVideo(data.id)}>
          <Button>
            <Ionicons name='play' size={24} color='#333' />
            <ButtonText>Play</ButtonText>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePreviewVideo(data.id)}>
          <ContainerIcons>
            <Feather name='play' size={24} color='#fff' />
            <TextIcon> Review</TextIcon>
          </ContainerIcons>
        </TouchableOpacity>
        <ContainerIcons>
          <TouchableOpacity
            onPress={() => toggleList(data)}
            accessible={true}
            accessibilityLabel='Add to list!'
          >
            <DisplayListColor id={data.id} />
          </TouchableOpacity>
        </ContainerIcons>
      </WrapperIcons>
      <TouchableOpacity onPress={() => handleDetailsMovie(data)}>
        <ContainerDetailsIcons>
          <Feather name='info' size={24} color='#fff' />
          <TextIcon>Details &amp; More</TextIcon>
        </ContainerDetailsIcons>
      </TouchableOpacity>
    </Container>
  );
}

export default ItemButtons;

const Container = styled.View`
  background: #2b2c4c;`;
const ContainerIconsPlus = styled.View``;
const WrapperIconsPlus = styled.View`
  justify-content: center;
  align-items: center;
  width: 100px;
`;
const WrapperIcons = styled.View`
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 8px;
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
  font-size: 10px;
  font-weight: bold;
`;

const TextIcon = styled.Text`
  font-size: 14px;
  color: #fff;
  padding: 4px;
`;
const ContainerIcons = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ContainerDetailsIcons = styled.View`
  width: 100%;
  padding: 10px;
  background-color: #484a7be0;
  justify-content: center;
  flex-direction: row;
  border-radius: 5px;
  margin-top: 10px;
`;
