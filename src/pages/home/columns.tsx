import { Avatar, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { User } from "../../types/user";
import { favourite, unFavourite } from "../../rdx/reducers/favouritesSlice";
import { StarFilled, StarOutlined } from "@ant-design/icons";

export const getColumns = (
  favourites: User[],
  dispatch: any
): ColumnsType<User> => [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: "15%",
  },
  {
    title: "Avatar",
    dataIndex: "avatar_url",
    key: "avatar",
    width: "30%",
    render: (url: string) => <Avatar src={url} />,
  },
  {
    title: "Name",
    dataIndex: "login",
    key: "login",
    width: "25%",
  },
  {
    title: "Actions",
    key: "actions",
    width: "20%",
    render: (_, record) => {
      const isFavourite = favourites.some((user) => user.id === record.id);
      return (
        <Button
          type={isFavourite ? "default" : "primary"}
          onClick={() =>
            isFavourite
              ? dispatch(unFavourite(record.id))
              : dispatch(favourite(record))
          }
        >
          {isFavourite ? (
            <StarFilled style={{ color: "gold", fontSize: "18px" }} />
          ) : (
            <StarOutlined style={{ fontSize: "18px" }} />
          )}
        </Button>
      );
    },
  },
];
