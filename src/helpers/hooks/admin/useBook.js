import { useState } from 'react';
import { bookService } from '../../services/admin/bookService';

export const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getBooks = async (params) => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await bookService.getBooks(params);
            setBooks(data.data);
            console.log(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        books,
        isLoading,
        error,
        getBooks,
    };
};