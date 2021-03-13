import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import styled from 'styled-components';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { OpenItem } from '../redux/actions/openitemAction';
import { getItemModal } from '../redux/actions/itemModalAction';
import CarouselSkeleton from './CarouselSkeleton';

const { width: screenWidth } = Dimensions.get('window');
const Item = ({
  id,
  image,
  description,
  title,
  voteCount,
  voteAverage,
  dateRelease,
  parallaxProps,
}) => {
  const dispatch = useDispatch();
  const ToggleOpenItem = () => {
    dispatch(OpenItem());
    dispatch(
      getItemModal(
        id,
        image,
        description,
        title,
        voteCount,
        voteAverage,
        dateRelease,
      ),
    );
  };
  return (
    <TouchableOpacity onPress={() => ToggleOpenItem()}>
      <ContainerItem>
        <ParallaxImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${image}`,
          }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.3}
          showSpinner={true}
          {...parallaxProps}
        />
      </ContainerItem>
    </TouchableOpacity>
  );
};
const ItemMemo = React.memo(Item);
const CarouselHero = () => {
  const carouselRef = useRef(null);

  const { movies, isLoading } = useSelector((state) => ({
    movies: state.upcomingMovies.upcomingMovies,
    isLoading: state.upcomingMovies.isLoading,
  }));

  const renderItem = ({ item }, parallaxProps) => {
    return (
      <ItemMemo
        key={item.id}
        title={item.title}
        image={item.poster_path}
        id={item.id}
        description={item.overview}
        voteAverage={item.vote_average}
        voteCount={item.vote_count}
        dateRelease={item.release_date}
        parallaxProps={parallaxProps}
      />
    );
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <CarouselSkeleton />
      ) : (
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 100}
          data={movies.reverse()}
          renderItem={renderItem}
          hasParallaxImages={true}
          layout={'default'}
          useScrollView={true}
        />
      )}
    </View>
  );
};

export default CarouselHero;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {},
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: 'rgba(0,0,0, 0.0)',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
});

const ContainerItem = styled.View`
  width: ${screenWidth - 100}px;
  height: ${screenWidth - 60}px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
