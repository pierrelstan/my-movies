import axiosService from './axiosService';

class WebAPI {
  static getTrendingMovies = async (page) => {
    return axiosService.get(
      `trending/movies/day?api_key=${process.env.API_TOKEN}&page=${page + 1}`,
    );
  };

  static getUpcomingMovies = async (page) => {
    return axiosService.get(
      `movie/upcoming?api_key=${process.env.API_TOKEN}&language=en-US&page=${
        page + 1
      }`,
    );
  };
  static getMostPopularMovies = async (page) => {
    return axiosService.get(
      `movie/popular?api_key=${process.env.API_TOKEN}&language=en-US&page=${
        page + 1
      }`,
    );
  };
  static getSearchMovies = async (SearchText, page) => {
    return axiosService.get(
      `search/movie?api_key=${process.env.API_TOKEN}&language=en-US&page=${
        page + 1
      }&query=${SearchText}&include_adult=false`,
    );
  };
}

export default WebAPI;
