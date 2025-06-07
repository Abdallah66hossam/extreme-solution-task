import { Table, Avatar, Input } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import useFetch from "../../hooks/useFetch";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

type User = {
  id: number;
  login: string;
  avatar_url: string;
};

const Users = () => {
  const { data, loading } = useFetch<User[]>("users");
  const pageSize = 5;

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1");

  const [searchValue, setSearchValue] = useState(search);
  const [current, setCurrent] = useState(page);

  useEffect(() => {
    setSearchValue(search);
    setCurrent(page);
  }, [search, page]);

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((user) =>
      user.login.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const total = filteredData.length;
  const paginatedData = filteredData.slice(
    (current - 1) * pageSize,
    current * pageSize
  );

  const handleSearch = (value: string) => {
    setSearchParams({ search: value, page: "1" });
  };

  const handlePageChange = (page: number) => {
    setSearchParams({ search, page: String(page) });
  };

  const columns: ColumnsType<User> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Avatar",
      dataIndex: "avatar_url",
      key: "avatar",
      render: (url: string) => <Avatar src={url} />,
    },
    {
      title: "Name",
      dataIndex: "login",
      key: "login",
    },
  ];

  const pagination: TablePaginationConfig = {
    current,
    pageSize,
    total,
    showSizeChanger: false,
    onChange: handlePageChange,
    itemRender: (page, type, originalElement) => {
      if (type === "prev") {
        return <a onClick={() => handlePageChange(1)}>First</a>;
      }
      if (type === "next") {
        const lastPage = Math.ceil(total / pageSize);
        return <a onClick={() => handlePageChange(lastPage)}>Last</a>;
      }
      return originalElement;
    },
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <Input.Search
        placeholder="Search users..."
        enterButton
        allowClear
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={handleSearch}
        className="mb-4 max-w-md"
      />
      <Table
        columns={columns}
        dataSource={paginatedData}
        loading={loading}
        rowKey="id"
        pagination={pagination}
      />
    </div>
  );
};

export default Users;
