import axios from 'axios';

export const api = axios.create({
  baseUrl: 'http://104.236.200.91/index.php/'
});
