import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { getMovie } from '../redux/actions/movieAction';

export default function PreviewVideo({ route, navigation }) {
  const { movie } = useSelector((state) => ({
    movie: state.movie.movie[0] || 0,
  }));

  const { id } = route.params;

  const dispatch = useDispatch();

  React.useEffect(
    () => navigation.addListener('focus', () => dispatch(getMovie(id))),
    [id],
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#333',
      }}
    >
      <WebView
        startInLoadingState={false}
        scalesPageToFit={true}
        domStorageEnabled={true}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        source={{ uri: `https://www.youtube.com/embed/${movie.key}` }}
      />
    </View>
  );
}
