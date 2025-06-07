import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../rdx/store";
import { Avatar, Card, Empty, Typography, Row, Col, Button } from "antd";
import type { User } from "../../types/user";
import { StarFilled } from "@ant-design/icons";
import { unFavourite } from "../../rdx/reducers/favouritesSlice";

const { Text } = Typography;

const FavouriteUsers = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state: RootState) => state.favourites.items);

  if (!favourites.length) {
    return (
      <Empty
        rootClassName="mt-40 text-gray-600 dark:text-gray-300"
        description="No favourite users found."
      />
    );
  }

  const handleUnfav = (userId: number) => {
    dispatch(unFavourite(userId));
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        Favourite Users
      </h2>
      <Row gutter={[16, 16]}>
        {favourites.map((user: User) => (
          <Col key={user.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              hoverable
              className="dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-colors duration-300"
              bodyStyle={{ padding: "16px" }}
              actions={[
                <Button
                  type="text"
                  danger
                  icon={<StarFilled />}
                  onClick={() => handleUnfav(user.id)}
                  aria-label={`Remove ${user.login} from favourites`}
                  key="unfav"
                >
                  Unfavorite
                </Button>,
              ]}
            >
              <Card.Meta
                avatar={<Avatar size={64} src={user.avatar_url} />}
                title={
                  <Text strong className="dark:text-white">
                    {user.login}
                  </Text>
                }
                description={
                  <span className="text-gray-600 dark:text-gray-400">
                    User ID: {user.id}
                  </span>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FavouriteUsers;
