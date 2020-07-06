import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID L1cgNI6ImqOYeqZSmDL47eTCFk2hNbok5-xiSxVAqLo'
    }
});