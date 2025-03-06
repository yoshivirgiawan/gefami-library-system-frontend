"use client";

import { twMerge } from "tailwind-merge";

// import { Select } from "@/components/ui";
// import { LoadingIcon } from "@/components/ui/icons";

const DataTable = ({
  columns,
  data = [],
  pagination = true,
  loading,
  currentPage = 1,
  rowsPerPage = 12,
  totalRows = 0,
  totalPages = 0,
  sizePerPageOptions,
  onPageChange,
  onRowsPerPageChange,
  onCellClick,
  className,
  ...tableProps
}) => {

  const getNestedValue = (obj, path) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  };

  const renderCell = (column, row) => {
    if (column.render) {
      return column.render(getNestedValue(row, column.accessor), row);
    }
    const value = getNestedValue(row, column.accessor);

    return typeof value === "string" || typeof value === "number" ? value : null;
  };

  const getAlignClass = (align) => {
    switch (align) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  const getJustifyClass = (align) => {
    switch (align) {
      case "center":
        return "justify-center";
      case "right":
        return "justify-end";
      default:
        return "justify-left";
    }
  };

  const getStickyClass = (sticky) => {
    if (!sticky) return "";

    const baseClass = "sticky z-10";
    switch (sticky) {
      case "left":
        return `${baseClass} left-0`;
      case "right":
        return `${baseClass} right-0`;
      default:
        return "";
    }
  };

  const lastLeftStickyIndex = columns.reduce((acc, col, index) => {
    if (col.sticky === "left") return index;

    return acc;
  }, -1);

  const firstRightStickyIndex = columns.findIndex(
    (col) => col.sticky === "right"
  );

  const handleNextPage = () => {
    if (currentPage < totalPages && onPageChange) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1 && onPageChange) {
      onPageChange(currentPage - 1);
    }
  };

  const handlePageChange = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <>
      <div
        className={twMerge(
          "relative w-full overflow-y-visible overflow-x-auto",
          className
        )}
      >
        <table
          className="w-full caption-bottom text-sm rounded-t-md"
          {...tableProps}
        >
          <thead className="bg-accent h-10 rounded-t-md">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              {columns.map((column, columnIndex) => (
                <th
                  key={column.accessor.toString()}
                  scope="col"
                  className={twMerge(
                    `px-6 py-4 relative text-xs font-medium text-gray-500 uppercase tracking-wider 
                    ${getAlignClass(column.headerAlign)} 
                    ${getStickyClass(column.sticky)}
                    ${columnIndex === lastLeftStickyIndex ? "border-r" : ""}
                    ${columnIndex === firstRightStickyIndex ? "border-l" : ""}`,
                    !!column.sticky ? "bg-accent" : "",
                    column.headerClassName
                  )}
                  style={{ width: column.width }}
                >
                  <div
                    className={`flex gap-2 items-center ${getJustifyClass(
                      column.headerAlign
                    )}`}
                  >
                    {column.header}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            className={`bg-background divide-y divide-gray-200 [&_tr:last-child]:border-0 relative ${
              loading ? "opacity-80" : ""
            }`}
          >
            {loading && (
              <tr className="px-6 py-4 whitespace-nowrap">
                <td className="border border-t-0 absolute inset-0 bg-background opacity-50 flex justify-center items-center z-10">
                  {/* <LoadingIcon className="h-10 w-10" /> */}
                </td>
              </tr>
            )}
            {!!data &&
              data.length > 0 &&
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  {columns.map((column, columnIndex) => (
                    <td
                      key={column.accessor.toString()}
                      className={twMerge(
                        `px-6 py-4 whitespace-nowrap w-full bg-background
                        ${getAlignClass(column.cellAlign)}
                        ${getStickyClass(column.sticky)}
                        ${columnIndex === lastLeftStickyIndex ? "border-r" : ""}
                        ${
                          columnIndex === firstRightStickyIndex
                            ? "border-l"
                            : ""
                        }`,
                        column.cellClassName
                      )}
                      style={{
                        width: column.width,
                        minWidth: column.minWidth,
                        maxWidth: column.maxWidth,
                      }}
                      onClick={() => {
                        if (column.isClickable !== false) {
                          onCellClick?.(row, column);
                        }
                      }}
                    >
                      {renderCell(column, row)}
                    </td>
                  ))}
                </tr>
              ))}
            {!loading && (!data || data.length === 0) && (
              <tr className="">
                <td
                  colSpan={columns.length}
                  className="border border-t-0 px-6 py-4 whitespace-nowrap text-center text-muted-foreground"
                >
                  No results
                </td>
              </tr>
            )}
            {loading && (!data || data.length === 0) && (
              <tr className="border border-t-0 ">
                <td
                  colSpan={1}
                  className="py-24 whitespace-nowrap text-center text-muted-foreground"
                ></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="hidden sm:inline">Showing </span>
            {`${
              !totalRows || totalRows === 0
                ? 0
                : (currentPage - 1) * rowsPerPage + 1
            } - ${Math.min(
              currentPage * rowsPerPage,
              totalRows
            )} of ${totalRows}`}
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Rows per page: </span>
            <div className="flex items-center gap-1">
              <button
                className="py-2 px-4 bg-[#41a0e4] text-white"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Back
              </button>
              <div className="hidden md:flex md:gap-1 ">
                {getPageNumbers().map((page) => (
                  <button
                    key={page}
                    className="py-2 px-4 bg-[#41a0e4] text-white"
                    disabled={page === currentPage}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                className="py-2 px-4 bg-[#41a0e4] text-white"
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DataTable;
