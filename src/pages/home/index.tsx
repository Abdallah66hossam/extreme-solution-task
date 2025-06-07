import { Table, Input, Card, Spin, Empty, Tag, Space, Alert } from "antd";
import useFetch from "../../hooks/useFetch";
import type { User } from "../../types/user";
import { getColumns } from "./columns";
import { useTableSearch } from "../../hooks/useTableSearch";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../rdx/store";
import { StarFilled, UserOutlined } from "@ant-design/icons";

const Users = () => {
  const { data, loading } = useFetch<User[]>("users");
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
          <h2 className="text-2xl font-bold m-0">GitHub Users</h2>
          <Tag icon={<StarFilled />} color="gold">
            {favourites.length} Favorites
          </Tag>
        </Space>
      }
      bordered={false}
      className="users-card"
    >
      <Input.Search
        placeholder="Search users by name..."
        enterButton="Search"
        size="large"
        allowClear
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={handleSearch}
        className="mb-6 users-search"
        prefix={<UserOutlined className="site-form-item-icon" />}
      />

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
              />
            ),
          }}
          rowClassName={(record) =>
            favourites.some((fav) => fav.id === record.id) ? "favorite-row" : ""
          }
          scroll={{ x: true }}
        />
      </Spin>
    </Card>
  );
};

export default Users;
/**
 * 
 *  {error && (
        <Alert
          message="Error Loading Users"
          description={error.message}
          type="error"
          showIcon
          className="mb-4"
        />
      )}
 */
