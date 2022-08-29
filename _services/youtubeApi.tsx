import axios from 'axios';

const API_KEY = 'AIzaSyCqdJE7b2ClGBfghwfiJT7Gu58IUxvE0vc';
const URL = 'https://youtube.googleapis.com/youtube/v3/search?q=';

export const getYoutubeVideo = (search: string) => {
  return axios
    .get(`${URL}${search}&key=${API_KEY}`)
    .then((response) => (response.data))
    .catch((error) => ({ error }));
};