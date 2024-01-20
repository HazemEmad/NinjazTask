import {API_KEY, API_URL} from '@env';
import axios from 'axios';

// Set up Axios with the API key
export const HTTP = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    ['app-id']: API_KEY,
  },
});
