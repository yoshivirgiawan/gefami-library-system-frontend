import adminApi from './adminApi';

export const bookService = {

    getBooks: async (params) => {
        try {
            const response = await adminApi.get('/api/books', { params });
            return response.data;
        } catch (error) {
            throw new Error(error.message || 'Failed to fetch books');
        }
    },
};