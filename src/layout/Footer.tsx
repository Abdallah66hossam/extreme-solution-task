import {
  GithubOutlined,
  LinkedinOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Divider, Space, Typography, Button } from "antd";

const { Text, Link } = Typography;

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className=" flex justify-between flex-wrap mb-16">
          {/* Challenge Info */}
          <div className="w-[20%]">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              GitHub Hiring Challenge
            </h3>
            <Text className="text-gray-600 block mb-4">
              This application was created as part of a technical assessment for
              Extreme Solutions.
            </Text>
            <Button
              type="primary"
              icon={<GithubOutlined />}
              href="https://github.com/Abdallah66hossam/extreme-solutions-task"
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700"
            >
              View Repository
            </Button>
          </div>

          {/* Technical Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Technical Stack
            </h3>
            <Space direction="vertical" className="w-full">
              <Text className="text-gray-600">
                <span className="font-medium">Frontend:</span> React,
                TypeScript, Ant Design, Tailwind CSS
              </Text>
              <Text className="text-gray-600">
                <span className="font-medium">State Management:</span> Redux
                Toolkit
              </Text>
              <Text className="text-gray-600">
                <span className="font-medium">Routing:</span> React Router
              </Text>
              <Text className="text-gray-600">
                <span className="font-medium">API:</span> GitHub REST API
              </Text>
            </Space>
          </div>

          {/* Developer Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Developer Information
            </h3>
            <Text className="text-gray-600 block mb-2">
              Created by: Abdallah Hossam
            </Text>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://github.com/Abdallah66hossam"
                target="_blank"
                className="text-gray-500 hover:text-gray-900"
              >
                <GithubOutlined className="text-xl" />
              </Link>
              <Link
                href="https://linkedin.com/in/abdallahhossam"
                target="_blank"
                className="text-gray-500 hover:text-gray-900"
              >
                <LinkedinOutlined className="text-xl" />
              </Link>
            </div>
          </div>
        </div>

        <Divider className="my-6" />

        <div className="flex justify-center items-center">
          <Text className="text-gray-500 text-sm">
            Built with <HeartFilled className="text-red-500 mx-1" /> for Extreme
            Solutions
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
