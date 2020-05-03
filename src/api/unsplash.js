import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 4bxYcXQBfGPWDdq4NGc2WZocVB_ADKnrTjwO0ZH7Jq4'
    }
});