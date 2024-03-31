import axios from "axios";

const BASE_URL = 'https://dummyjson.com/'

export const getPosts = async ({ limit = 20, skip = 0 }) => {
    try {
        const response = await axios.get(`${BASE_URL}todos`, {
            params: {
                limit,
                skip,
            },
        });
        return response.data.todos;
    } catch (error) {
        return 'Ошибка получения постов';
    }
};
