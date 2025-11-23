import axios from 'axios';

const API_KEY = '53371972-407ae4137ffe2ff2cf6f525d2';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    };

    return axios.get('/', { params }).then(response => response.data);
}
