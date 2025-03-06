import { useLoans } from "helpers/hooks/admin/useLoan";
import DataTable from "parts/DataTable";
import React, { useEffect } from "react";

export default function User() {
  const { loans, isLoading, error, getUnreturnedLoans } = useLoans();

  useEffect(() => {
    getUnreturnedLoans({});
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
      header: "Book",
      accessor: "book.title",
    },
    {
      header: "User",
      accessor: "user.name",
    },
    {
        header: "Borrowed At",
        accessor: "borrowed_at",
    },
    {
        header: "Due Date",
        accessor: "due_date",
    },
    {
        header: "Status",
        accessor: "status",
    },
  ];

  return (
    <>
      <section class="p-8">
        <div class="container min-h-screen">
          <div class="w-full">
            <div className="flex justify-between items-center">
              <h2 class="text-3xl font-normal mb-6 leading-none">
                Manajemen Pinjaman
              </h2>
            </div>
            <div>
              <DataTable
                columns={columns}
                data={loans}
                totalPages={1}
                totalRows={loans.length}
                rowsPerPage={100}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
