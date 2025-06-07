import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const useTableSearch = <T extends { [key: string]: any }>(
  data: T[] | undefined,
  searchField: keyof T
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1");

  const [searchValue, setSearchValue] = useState(search);
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    setSearchValue(search);
    setCurrentPage(page);
  }, [search, page]);

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((item) =>
      String(item[searchField]).toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search, searchField]);

  const handleSearch = (value: string) => {
    setSearchParams({ search: value, page: "1" });
  };

  const handlePageChange = (page: number) => {
    setSearchParams({ search, page: String(page) });
  };

  return {
    searchValue,
    currentPage,
    filteredData,
    handleSearch,
    handlePageChange,
    setSearchValue,
  };
};
