import { combineReducers } from 'redux';
import movies from '../reducers/moviesReducer';
import trendingMovies from './trendingMoviesReducer';
import upcomingMovies from './upcomingMoviesReducer';
import openitem from './openitemReducer';

const allReducers = combineReducers({
  openitem: openitem,
  movies: movies,
  trendingMovies: trendingMovies,
  upcomingMovies: upcomingMovies,
});
export default allReducers;
