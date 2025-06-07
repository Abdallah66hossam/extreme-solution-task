import { Table, Input, Card, Spin, Empty, Tag, Space, Alert } from "antd";
import useFetch from "../../hooks/useFetch";
import type { User } from "../../types/user";
import { getColumns } from "./columns";
import { useTableSearch } from "../../hooks/useTableSearch";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../rdx/store";
import { StarFilled, UserOutlined } from "@ant-design/icons";

const Users = () => {
  const { data, loading, error } = useFetch<User[]>("users");
  const favourites = useSelector((state: RootState) => state.favourites.items);
  const dispatch = useDispatch();

  const {
    searchValue,
    currentPage,
    filteredData,
    handleSearch,
    handlePageChange,
    setSearchValue,
  } = useTableSearch<User>(data || [], "login");

  const columns = getColumns(favourites, dispatch);

  return (
    <Card
      title={
        <Space align="center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
            GitHub Users
          </h2>
          <Tag
            icon={<StarFilled />}
            color="gold"
            className="dark:text-yellow-400 dark:bg-yellow-900/20 dark:border-yellow-300"
          >
            {favourites.length} Favorites
          </Tag>
        </Space>
      }
      bordered={false}
      className="users-card dark:bg-gray-900 dark:text-white transition-colors duration-300"
    >
      <Input.Search
        placeholder="Search users by name..."
        enterButton="Search"
        size="large"
        allowClear
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={handleSearch}
        className="mb-6 users-search dark:bg-gray-800 dark:text-white dark:border-gray-700"
        prefix={
          <UserOutlined className="site-form-item-icon dark:text-white" />
        }
      />
      {error && (
        <Alert
          message="Error Loading Users"
          type="error"
          showIcon
          className="mb-4"
        />
      )}
      <Spin spinning={loading} tip="Loading users..." size="large">
        <Table
          columns={columns}
          dataSource={filteredData}
          loading={loading}
          rowKey="id"
          pagination={{
            current: currentPage,
            pageSize: 5,
            total: filteredData.length,
            onChange: handlePageChange,
            showSizeChanger: false,
            showQuickJumper: true,
            position: ["bottomCenter"],
            pageSizeOptions: ["5", "10", "20"],
          }}
          locale={{
            emptyText: (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  searchValue
                    ? `No users found for "${searchValue}"`
                    : "No users available"
                }
                className="dark:text-gray-400"
              />
            ),
          }}
          rowClassName={(record) =>
            favourites.some((fav) => fav.id === record.id)
              ? "favorite-row dark:bg-yellow-100"
              : "dark:bg-gray-800 dark:text-white"
          }
          scroll={{ x: true }}
        />
      </Spin>
    </Card>
  );
};

export default Users;
