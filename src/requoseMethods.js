import axios from 'axios';

const BASE_URL = "https://clownfish-app-zvvlr.ondigitalocean.app/";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
