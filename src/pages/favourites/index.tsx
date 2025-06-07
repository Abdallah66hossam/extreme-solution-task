import { useSelector } from "react-redux";
import type { RootState } from "../../rdx/store";
import { Avatar, Card, Empty, Typography, Row, Col } from "antd";
import type { User } from "../../types/user";

const { Text } = Typography;

const FavouriteUsers = () => {
  const favourites = useSelector((state: RootState) => state.favourites.items);

  if (!favourites.length) {
    return (
      <Empty rootClassName={"mt-40"} description="No favourite users found." />
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6">Favourite Users</h2>
      <Row gutter={[16, 16]}>
        {favourites.map((user: User) => (
          <Col key={user.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card hoverable>
              <Card.Meta
                avatar={<Avatar size={64} src={user.avatar_url} />}
                title={<Text strong>{user.login}</Text>}
                description={`User ID: ${user.id}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FavouriteUsers;
