import axios from 'axios';

const API_URL = 'https://dog.ceo/api/';

const API_CLIENT = axios.create({
  baseURL: API_URL,
});

export type GetAllBreedsResponseType = {
  data: {
    message: { [key: string]: string[] };
    status: string;
  };
};

export type GetBreedImagesResponseType = {
  data: {
    message: string[];
  };
};

export const getAllBreeds = async () => {
  return await API_CLIENT.get('breeds/list/all');
};

export const getBreedImages = async (breed: string) => {
  return await API_CLIENT.get('breed/' + breed + '/images');
};
