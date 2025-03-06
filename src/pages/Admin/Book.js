import { useBooks } from "helpers/hooks/admin/useBook";
import DataTable from "parts/DataTable";
import React, { useEffect } from "react";

export default function Product() {
  const { books, isLoading, error, getBooks } = useBooks();

  useEffect(() => {
    getBooks({});
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

  const columns = [
    {
      header: "Title",
      accessor: "title",
    },
    {
      header: "Author",
      accessor: "author",
    },
    {
      header: "ISBN",
      accessor: "isbn",
    },
    {
      header: "Created At",
      accessor: "created_at",
    },
  ];

  return (
    <>
      <section class="p-8">
        <div class="container min-h-screen">
          <div class="w-full">
            <div className="flex justify-between items-center">
              <h2 class="text-3xl font-normal mb-6 leading-none">
                Manajemen Buku
              </h2>
              <button className="py-2 px-4 bg-[#41a0e4] text-white">
                TAMBAH BUKU
              </button>
            </div>
            <div>
              <DataTable
                columns={columns}
                data={books}
                totalPages={1}
                totalRows={books.length}
                rowsPerPage={100}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
