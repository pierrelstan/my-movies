import { combineReducers } from 'redux';
import movies from '../reducers/moviesReducer';
import trendingMovies from './trendingMoviesReducer';
import upcomingMovies from './upcomingMoviesReducer';
import openitem from './openitemReducer';
import lastMovie from './latestMovieReducer';
import item from './itemModalReducer';

const allReducers = combineReducers({
  item: item,
  lastMovie: lastMovie,
  openitem: openitem,
  movies: movies,
  trendingMovies: trendingMovies,
  upcomingMovies: upcomingMovies,
});
export default allReducers;
