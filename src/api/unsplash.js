import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID hz0IvwYHW4k7r13V1yMujndeqeJ0hWRkFNr0tIJ2VC8'
    }
});