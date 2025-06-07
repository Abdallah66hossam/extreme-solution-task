import { Table, Input } from "antd";
import useFetch from "../../hooks/useFetch";
import type { User } from "../../types/user";
import { columns } from "./columns";
import { useTableSearch } from "../../hooks/useTableSearch";

const Users = () => {
  const { data, loading } = useFetch<User[]>("users");
  const pageSize = 5;

  const {
    searchValue,
    currentPage,
    filteredData,
    handleSearch,
    handlePageChange,
    setSearchValue,
  } = useTableSearch<User>(data || [], "login");

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
        dataSource={filteredData}
        loading={loading}
        rowKey="id"
        pagination={{
          current: currentPage,
          pageSize,
          total: filteredData.length,
          onChange: handlePageChange,
        }}
      />
    </div>
  );
};

export default Users;
