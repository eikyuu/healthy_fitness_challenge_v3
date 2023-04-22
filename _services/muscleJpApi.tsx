import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY_MUSCLEJP!;

const options = {
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

const url = 'https://exercisedb.p.rapidapi.com/';

export const getByPartBody = (body: string) => {
  return axios
    .get(`${url}exercises/bodyPart/${body}`, options)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getByName = (name: string) => {
  return axios
    .get(`${url}exercises/name/${name}`, options)
    .then((response) => response.data)
    .catch((error) => ({ error }));
};

export const getByEquipment = (equipment: string) => {
  return axios
    .get(`${url}exercises/equipment/${equipment}`, options)
    .then((response) => response.data)
    .catch((error) => ({ error }));
};
export const getById = (id: string) => {
  return axios
    .get(`${url}exercises/exercise/${id}`, options)
    .then((response) => response.data)
    .catch((error) => ({ error }));
};
export const getAll = () => {
  return axios
    .get(`${url}exercises`, options)
    .then((response) => response.data)
    .catch((error) => ({ error }));
};
