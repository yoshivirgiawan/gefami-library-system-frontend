import React, { useEffect } from "react";

import BookCard from "components/BookCard";
import { useBooks } from "helpers/hooks/useBook";
import { useNavigate } from "react-router-dom";
import 'swiper/css';

const Books = () => {
  const navigate = useNavigate();
  const { books, isLoading, error, fetchAllBooks } = useBooks();

  useEffect(() => {
    fetchAllBooks({});
    console.log(books);
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto pb-8">
        <div className="text-center py-8">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto pb-8">
        <div className="text-center py-8 text-red-500">Error: {error}</div>
      </div>
    );
  }

    return (
        <div className="container mx-auto px-4 pt-16">
          <h1 className="text-2xl font-bold tracking-tighter font-playfair mb-8">Buku Tersedia</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {books.map((book, index) => (
              <div key={book.id || index} className="w-full">
                <BookCard photo={book.photo} title={book.title} author={book.author} onClick={() => navigate(`/books/${book.id}`)} />
              </div>
            ))}
          </div>
        </div>
    );
};

export default Books;