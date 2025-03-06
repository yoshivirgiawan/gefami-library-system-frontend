import adminApi from './adminApi';

export const userService = {

    getUsers: async (params) => {
        try {
            const response = await adminApi.get('/api/users', { params });
            return response.data;
        } catch (error) {
            throw new Error(error.message || 'Failed to fetch users');
        }
    },
};