import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchMovies } from '../redux/actions/searchMoviesActions';
import imagelogo from '../assets/imageLogo.jpg';

export default function SearchMoviesScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [SearchText, setSearchText] = useState('');
  const [data, setData] = useState([]);

  const { searchMovies, page, totalPages } = useSelector((state) => ({
    searchMovies: state.searchMovies.searchMovies,
    page: state.searchMovies.page,
    totalPages: state.searchMovies.totalPages,
  }));

  useEffect(() => {
    setData([...searchMovies]);
  }, [searchMovies]);
  const handleChangeText = (text) => {
    setSearchText(text);
  };

  const handleSubmitSearChFilms = () => {
    setLoading(true);
    if (SearchText) {
      setLoading(false);
      dispatch(getSearchMovies(SearchText));
    }
  };

  const handleDetailsMovie = (item) => {
    const {
      backdrop_path,
      overview,
      title,
      vote_count,
      vote_average,
      release_date,
    } = item;
    let image = backdrop_path;
    let voteCount = vote_count;
    let dateRelease = release_date;
    let voteAverage = vote_average;
    let description = overview;
    let id = item.id;
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
    <View style={styles.container}>
      <TextInput
        placeholder={`Enter the title's movie`}
        style={styles.textInput}
        onChangeText={(text) => handleChangeText(text)}
        onSubmitEditing={() => handleSubmitSearChFilms()}
        defaultValue={SearchText}
      />
      <View
        style={{
          marginHorizontal: 6,
        }}
      >
        <Button
          title='Search'
          onPress={() => handleSubmitSearChFilms()}
          color='#888'
          style={{
            height: 50,
            marginLeft: 5,
            marginRight: 5,
            borderRadius: 20,
          }}
        />
      </View>
      {loading ? (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' color='#0000ff' />
          <Text>Loading...</Text>
        </View>
      ) : (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={data}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
          onEndReached={() => {
            if (page < totalPages) {
              dispatch(getSearchMovies(SearchText, page));
            }
          }}
          renderItem={({ item }) => (
            <View key={item.id}>
              <TouchableOpacity
                style={styles.main_container}
                // onPress={() => displayDetailsForFilms(id)}
                onPress={() => handleDetailsMovie(item)}
              >
                {item.backdrop_path ? (
                  <Image
                    style={styles.image}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
                    }}
                  />
                ) : (
                  <Image style={styles.image} source={imagelogo} />
                )}
                <View style={styles.content_container}>
                  <View style={styles.header_container}>
                    <Text style={styles.title_text}>{item.title}</Text>
                    <Text style={styles.vote_text}>{item.vote}</Text>
                  </View>
                  <View style={styles.description_container}>
                    <Text style={styles.description_text} numberOfLines={6}>
                      {item.overview}
                    </Text>
                  </View>
                  <View style={styles.date_container}>
                    <Text style={styles.date_text}>
                      Sorti le {item.release_date}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#444' },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#333',
    paddingLeft: 5,
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginTop: 50,
    marginBottom: 10,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favorite_image: {
    width: 20,
    height: 20,
  },
  main_container: {
    height: 190,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray',
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    color: '#fff',
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#fff',
  },
  description_container: {
    flex: 7,
  },
  description_text: {
    fontStyle: 'italic',
    color: '#fff',
  },
  date_container: {
    flex: 1,
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14,
    color: '#fff',
  },
  favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
});
