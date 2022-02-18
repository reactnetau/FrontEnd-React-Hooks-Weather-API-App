import axios from 'axios';
import config from '../config';

export function getResults(q) {
  const url = `${config.apiURL}?key=${config.apiKey}&q=${q}&days=3&aqi=no&alerts=no`;
  return axios.get(url);
}

export function getImage(imageURL) {
  const url = `${imageURL}?key=${config.apiKey}`;
  return url;
}
