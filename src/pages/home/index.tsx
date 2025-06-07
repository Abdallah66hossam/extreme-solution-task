import { Table, Avatar } from "antd";
import type { ColumnsType } from "antd/es/table";
import useFetch from "../../hooks/useFetch";

type User = {
  id: number;
  login: string;
  avatar_url: string;
};

const Users = () => {
  const { data, loading } = useFetch<User[]>("users");

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

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <Table
        columns={columns}
        dataSource={data || []}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Users;
