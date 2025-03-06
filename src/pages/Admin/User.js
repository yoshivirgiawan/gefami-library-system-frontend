import DataTable from "parts/DataTable";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "helpers/hooks/admin/useUser";

export default function User() {
  const {users, isLoading, error, getUsers } = useUsers();

  useEffect(() => {
    getUsers({});
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
      header: "Name",
      accessor: "name",
      width: "200px"
    },
    {
      header: "Email",
      accessor: "email",
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
                Manajemen User
              </h2>
              <Link
                className="py-2 px-4 bg-[#41a0e4] text-white"
                to={"/admin/user/add"}
              >
                TAMBAH USER
              </Link>
            </div>
            <div>
              <DataTable
                columns={columns}
                data={users}
                totalPages={1}
                totalRows={100}
                rowsPerPage={100}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
