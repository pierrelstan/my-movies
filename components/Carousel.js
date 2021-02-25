import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { OpenItem } from '../redux/actions/openitemAction';
import { getItemModal } from '../redux/actions/itemModalAction';

const { width: screenWidth } = Dimensions.get('window');
const Item = ({ image, id, description, parallaxProps }) => {
  const dispatch = useDispatch();
  const ToggleOpenItem = () => {
    dispatch(OpenItem());
    dispatch(getItemModal(id, image, description));
  };
  return (
    <TouchableOpacity onPress={() => ToggleOpenItem()}>
      <View style={styles.item} key={id}>
        <ParallaxImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${image}`,
          }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.3}
          {...parallaxProps}
        />
      </View>
    </TouchableOpacity>
  );
};
const CarouselHero = () => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const { movies } = useSelector((state) => ({
    movies: state.upcomingMovies.upcomingMovies,
  }));

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setEntries(movies);
    }
    return () => {
      mounted = false;
    };
  }, [movies]);

  const renderItem = ({ item }, parallaxProps) => {
    return (
      <Item
        name={item.name}
        image={item.poster_path}
        id={item.id}
        description={item.overview}
        parallaxProps={parallaxProps}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 100}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        layout={'default'}
      />
    </View>
  );
};

export default CarouselHero;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 100,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'rgba(0,0,0, 0.0)',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
});
