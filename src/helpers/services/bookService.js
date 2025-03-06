import api from './api';

export const bookService = {

    getAllBooks: async (params) => {
        try {
            const response = await api.get('/books', { params });
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to fetch books');
        }
    },

    getBookById: async (id) => {
        try {
            const response = await api.get(`/books/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to fetch book');
        }
    },

    borrowBook: async (id) => {
        try {
            const response = await api.post(`/loans/borrow`, { book_id: id });
            return response;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to borrow book');
        }
    }
};