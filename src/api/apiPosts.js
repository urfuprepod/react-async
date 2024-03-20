export const getNews = async ({ limit = 20, skip = 0 }) => {
    try {
        const response = await axios.get(`${BASE_URL}search`, {
            params: {
                limit,
                skip,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
