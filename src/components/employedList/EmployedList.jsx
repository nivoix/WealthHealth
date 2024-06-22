import React from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useSortBy,
} from "react-table";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../utils/redux";
import BrowsePages from "./utils/BrowsePages";
import GlobalFilter from "./utils/GlobalFilter";
import SetPagination from "./utils/SetPagination";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const EmployedList = () => {
  let storedEmployees = useSelector((state) => state.employees.employeeList);
  const data = React.useMemo(() => storedEmployees, [storedEmployees]);
  const dispatch = useDispatch();

  const handleDeleteClick = (index, row) => {
    dispatch(deleteEmployee(row.original.id));
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
        Cell: ({ value }) => {
          return format(new Date(value), "MM/dd/yyyy");
        },
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Date of Birth",
        accessor: "birthDate",
        Cell: ({ value }) => {
          return format(new Date(value), "MM/dd/yyyy");
        },
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip Code",
        accessor: "zipCode",
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
        sortBy: [
          {
            id: "firstName",
            desc: false,
          },
        ],
      },
      disableSortRemove: true,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const getPageMin = () => {
    if (rows.length === 0) {
      return 0;
    } else if (pageIndex > 0) {
      return pageIndex * pageSize + 1;
    }
    return 1;
  };
  const getPageMax = () => {
    const pageMax = pageSize * (pageIndex + 1);
    if (pageSize > rows.length) {
      return rows.length;
    } else if (pageMax > rows.length) {
      return rows.length;
    }
    return pageMax;
  };
  return (
    <div className="table-background">
      <div className="table-container">
        <div className="table-container__header">
          <SetPagination setPageSize={setPageSize} pageSize={pageSize} />
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </div>
        {rows.length > 0 ? (
          <table className="table" {...getTableProps()}>
            <thead className="table__head">
              {headerGroups.map((headerGroup) => (
                <tr
                  className="row"
                  key={headerGroup.id}
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      key={column.id}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div className="element">
                        {column.render("Header")}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <IoIosArrowDown />
                            ) : (
                              <IoIosArrowUp />
                            )
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="table__body" {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr key={row.id} {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          {...cell.getCellProps()}
                          className={cell.column.isSorted ? "sorted" : null}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                    <td>
                      <button
                        className="btnDelete"
                        key={row.id}
                        onClick={() => handleDeleteClick(row.index, row)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="table-placeholder">No data available in table</div>
        )}

        <div className="table-container__footer">
          <div className="entries-count">
            Showing {getPageMin()} to {getPageMax()} of {rows.length} entries
          </div>
          <BrowsePages
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageCount={pageCount}
            gotoPage={gotoPage}
            previousPage={previousPage}
            nextPage={nextPage}
            pageIndex={pageIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployedList;
