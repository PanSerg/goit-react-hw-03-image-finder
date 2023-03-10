import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = '32820375-2ad81e3b731d859a46f31c661';

export default async function getImages(q, page) {
    try {
        const filter = `?key=${key}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;
        const response = await axios.get(filter)
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}