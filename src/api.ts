import axios from 'axios';
import md5 from 'md5';

const publicKey = 'e2ae2dcd47c7cf7d070e2bed17ac4f05';
const privateKey = '6fa708f914d7f786d935e75a5bdd0b6bf9dad94e';
const ts = new Date().getTime().toString(); 

const hash = md5(ts + privateKey + publicKey);

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: publicKey,
    ts,
    hash,
  },
});

console.log('Request Params:', {
  apikey: publicKey,
  ts,
  hash,
});

export default instance;
