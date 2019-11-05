import axios from 'axios';
import { Platform } from 'react-native';

let url;

if (Platform.OS === 'ios') {
  url = 'http://localhost:3333';
} else if (Platform.OS === 'android') {
  url = 'http://10.0.2.2:3333';
}

const api = axios.create({
  baseURL: url,
});

export default api;
