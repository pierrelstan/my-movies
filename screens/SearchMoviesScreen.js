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
import { Ionicons } from 'react-native-vector-icons';
import { getSearchMovies } from '../redux/actions/searchMoviesActions';
import imagelogo from '../assets/imageLogo.jpg';
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
    <View>
      {active === true ? (
        <Ionicons name='bookmark-outline' color='#B6B133' size={26} />
      ) : (
        <Ionicons name='bookmark-outline' color='#fff' size={26} />
      )}
    </View>
  );
};

export default function SearchMoviesScreen({ children }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [SearchText, setSearchText] = useState('stars');
  const [data, setData] = useState([]);

  const { searchMovies, page, totalPages, listMovies } = useSelector(
    (state) => ({
      searchMovies: state.searchMovies.searchMovies,
      page: state.searchMovies.page,
      totalPages: state.searchMovies.totalPages,
      listMovies: state.listMovies.listMovies,
    }),
  );

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

  const toggleList = (item) => {
    dispatch(addToListAction(item));
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
  // console.log(data2);

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
          initialNumToRender={50}
          onEndReached={() => {
            if (page < totalPages) {
              dispatch(getSearchMovies(SearchText, page));
            }
          }}
          renderItem={({ item }) => (
            <View
              key={item.id}
              style={{
                backgroundColor: '#383958',
                margin: 10,
                borderRadius: 10,
              }}
            >
              <View style={styles.main_container}>
                <TouchableOpacity onPress={() => handleDetailsMovie(item)}>
                  <View>
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
                  </View>
                </TouchableOpacity>
                <View style={styles.content_container}>
                  <View style={styles.header_container}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                      }}
                    >
                      <Text style={styles.title_text}>{item.title}</Text>
                      <TouchableOpacity onPress={() => toggleList(item)}>
                        <DisplayListColor id={item.id} />
                      </TouchableOpacity>
                    </View>

                    <Text style={styles.vote_text}>{item.vote}</Text>
                  </View>

                  <View style={styles.description_container}>
                    <TouchableOpacity onPress={() => handleDetailsMovie(item)}>
                      <Text style={styles.description_text} numberOfLines={3}>
                        {item.overview}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#24243C' },
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
    height: 120,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 5,
    backgroundColor: 'gray',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
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
