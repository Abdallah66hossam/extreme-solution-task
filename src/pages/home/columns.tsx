import { Avatar } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { User } from "../../types/user";

export const columns: ColumnsType<User> = [
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
