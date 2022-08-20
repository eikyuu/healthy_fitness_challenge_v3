import axios from 'axios';

const options = {
  headers: {
    'X-RapidAPI-Key': '4b2bce93c8mshf294847386a5ed8p17fdafjsndc04db8707cf',
    'X-RapidAPI-Host': 'musclejp.p.rapidapi.com',
  },
};

const url = 'https://musclejp.p.rapidapi.com/';

export const getByTarget = (target: string) => {
  return axios
    .get(`${url}get-cible/${target}`, options)
    .then((response) => (response.data))
    .catch((error) => ({ error }));
};

export const getByPartBody = (body: string) => {
  return axios
    .get(`${url}get-partie-du-corps/${body}`, options)
    .then((response) => (response.data))
    .catch((error) => ({ error }));
};

export const getByName = (name: string) => {
  return axios
    .get(`${url}get-nom/${name}`, options)
    .then((response) => (response.data))
    .catch((error) => ({ error }));
};

export const getByEquipment = (equipment: string) => {
  return axios
    .get(`${url}get-equipement/${equipment}`, options)
    .then((response) => (response.data))
    .catch((error) => ({ error }));
};
export const getById = (id: string) => {
  return axios
    .get(`${url}get-id/${id}`, options)
    .then((response) => (response.data))
    .catch((error) => ({ error }));
};
export const getAll = () => {
  return axios
    .get(`${url}get-tous`, options)
    .then((response) => (response.data))
    .catch((error) => ({ error }));
};
