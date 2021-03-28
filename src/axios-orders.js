import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burgerbuilder-1d688-default-rtdb.firebaseio.com/'
});

export default instance;