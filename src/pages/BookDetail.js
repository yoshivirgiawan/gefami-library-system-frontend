import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Sitemap from 'parts/Sitemap'
import { useBooks } from "helpers/hooks/useBook";

export default function BookDetail() {
  const { id } = useParams();
  const { book, isLoading, error, fetchBookById, loanStatus, borrowBook } = useBooks();

  useEffect(() => {
    fetchBookById(id);
  }, [id]);

  const handleBorrow = () => {
    borrowBook(parseInt(id));
  };

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;
  if (!book) return <p className="text-center">Buku tidak ditemukan</p>;

  return (
    <>
      <Header position={'sticky'} />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <img src={book.photo} alt={book.title} className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p className="text-lg text-gray-600 mt-2">By {book.author}</p>
            <p className="text-md text-orange-500 mt-2">ISBN {book.isbn}</p>
            <p className="mt-4 text-gray-700">{book.description}</p>
            <button onClick={handleBorrow} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
              Pinjam Buku
            </button>
            {loanStatus && (
                <p className={`mt-4 text-sm ${loanStatus.success ? "text-green-600" : "text-red-600"}`}>
                {loanStatus.message}
                </p>
            )}
          </div>
        </div>
      </div>
      <Sitemap />
      <Footer />
    </>
  );
}