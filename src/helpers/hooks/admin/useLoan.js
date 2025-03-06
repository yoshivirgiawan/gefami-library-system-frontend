import { useState } from 'react';
import { loanService } from '../../services/admin/loanService';

export const useLoans = () => {
    const [loans, setLoans] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUnreturnedLoans = async (params) => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await loanService.getUnreturnedLoans(params);
            setLoans(data.data);
            console.log(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        loans,
        isLoading,
        error,
        getUnreturnedLoans,
    };
};