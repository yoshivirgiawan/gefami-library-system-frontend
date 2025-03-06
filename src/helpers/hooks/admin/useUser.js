import { useState } from 'react';
import { userService } from '../../services/admin/userService';

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUsers = async (params) => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await userService.getUsers(params);
            setUsers(data.data);
            console.log(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        users,
        isLoading,
        error,
        getUsers,
    };
};