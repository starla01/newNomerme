import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burguer-61080.firebaseio.com/'
});

export default instance;