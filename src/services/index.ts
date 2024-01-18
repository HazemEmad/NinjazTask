import {API_KEY} from '@env';
import axios from 'axios';

const API_URL = 'https://dummyapi.io/data/v1/';

// Set up Axios with the API key
export const HTTP = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    ['app-id']: API_KEY,
  },
});
