import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY_YOUTUBE;
const URL = 'https://youtube.googleapis.com/youtube/v3/search?q=';

export const getYoutubeVideo = (search: string) => {
  return axios
    .get(`${URL}${search}&key=${API_KEY}`)
    .then((response) => response.data)
    .catch((error) => ({ error }));
};
