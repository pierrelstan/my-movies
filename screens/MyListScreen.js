import React from 'react';
import styled from 'styled-components';
import { View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import image from '../assets/imageLogo.jpg';

const { width: ScreenWidth } = Dimensions.get('window');

let numColumns = 2;
export default function MyList({ navigation }) {
  const { myListMovies } = useSelector((state) => ({
    myListMovies: state.listMovies.listMovies,
  }));

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(myListMovies);
  }, [myListMovies.length]);
  const handleItem = (item) => {
    let title = item.title;
    let image = item.poster_path;
    let id = item.id;
    let description = item.overview;
    let voteAverage = item.vote_average;
    let voteCount = item.vote_count;
    let dateRelease = item.release_date;

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
  return (
    <Container>
      <FlatList
        data={data}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleItem(item)}>
              <View
                key={item.id}
              >
                {item.poster_path ? (
                  <Image
                    style={{
                      aspectRatio:
                      Math.round(ScreenWidth) === 360
                          ? 0.5
                          : Math.round(ScreenWidth)
                          ? 0.6
                          : 1,
                      flex: 1 / numColumns,
                      width: 50,
                      height: 300,
                      resizeMode: 'cover',
                      marginVertical: 4,
                      marginHorizontal: 3,
                      marginLeft:  Math.round(ScreenWidth) <= 360 ? 20 : 10,
                      marginRight:0,
                    }}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                    }}
                  />
                ) : (
                  <Image
                    source={image}
                    style={{
                      aspectRatio:
                        ScreenWidth === 360
                          ? 0.8
                          : Math.round(ScreenWidth) === 411
                          ? 0.9
                          : 1,
                      flex: 1 / numColumns,
                      width: 40,
                      height: 150,
                      resizeMode: 'contain',
                      marginVertical: 8,
                    }}
                  />
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  background-color: #383958d1;
`;
