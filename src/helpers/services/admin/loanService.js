import adminApi from './adminApi';

export const loanService = {

    getUnreturnedLoans: async (params) => {
        try {
            const response = await adminApi.get('/api/loans', { params });
            return response.data;
        } catch (error) {
            throw new Error(error.message || 'Failed to fetch loans');
        }
    },
};