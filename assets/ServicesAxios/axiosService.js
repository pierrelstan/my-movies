import axios from 'axios';

const axiosOptions = {
  baseURL: `https://api.themoviedb.org/3/`,
};

const axiosService = axios.create(axiosOptions);

export default axiosService;
