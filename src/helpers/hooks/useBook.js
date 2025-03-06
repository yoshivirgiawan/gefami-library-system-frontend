import { useState, useEffect } from 'react';
import { bookService } from '../services/bookService';

export const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [loanStatus, setLoanStatus] = useState(null);

    const fetchAllBooks = async (params) => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await bookService.getAllBooks(params);
            setBooks(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchBookById = async (id) => {
        setIsLoading(true);
        setError(null);
        try {
          const data = await bookService.getBookById(id);
          setBook(data);
        } catch (err) {
          setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    const borrowBook = async (id) => {
        setIsLoading(true);
        setLoanStatus(null);
        try {
          const response = await bookService.borrowBook(id);
          setLoanStatus({ success: true, message: response.data.message });
        } catch (err) {
          setLoanStatus({ success: false, message: err.message || "Terjadi kesalahan" });
        }
        setIsLoading(false);
    };

    return {
        books,
        book,
        isLoading,
        error,
        fetchAllBooks,
        fetchBookById, 
        borrowBook,
        loanStatus
    };
};