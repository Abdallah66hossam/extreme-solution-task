import {
  GithubOutlined,
  LinkedinOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Divider, Space, Typography, Button } from "antd";

const { Text, Link } = Typography;

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between flex-wrap gap-8 mb-16">
          <div className="w-full md:w-[30%]">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              GitHub Hiring Challenge
            </h3>
            <Text className="text-gray-600 dark:text-gray-400 block mb-4">
              This is a part of a technical assessment for Extreme Solution.
            </Text>
            <Button
              type="primary"
              icon={<GithubOutlined />}
              href="https://github.com/Abdallah66hossam/extreme-solution-task"
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 text-white border-none"
            >
              View Repository
            </Button>
          </div>

          <div className="w-full md:w-[30%]">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Technical Stack
            </h3>
            <Space direction="vertical" className="w-full">
              <Text className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Frontend:</span> React,
                TypeScript, Ant Design, Tailwind CSS
              </Text>
              <Text className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">State Management:</span> Redux
                Toolkit
              </Text>
              <Text className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Routing:</span> React Router
              </Text>
              <Text className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">API:</span> GitHub REST API
              </Text>
            </Space>
          </div>

          <div className="w-full md:w-[30%]">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Developer Information
            </h3>
            <Text className="text-gray-600 dark:text-gray-400 block mb-2">
              Created by: Abdallah Hossam
            </Text>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://github.com/Abdallah66hossam"
                target="_blank"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <GithubOutlined className="text-xl" />
              </Link>
              <Link
                href="https://linkedin.com/in/abdallahhossam"
                target="_blank"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <LinkedinOutlined className="text-xl" />
              </Link>
            </div>
          </div>
        </div>

        <Divider className="my-6 dark:border-gray-700" />

        <div className="flex justify-center items-center">
          <Text className="text-gray-500 dark:text-gray-400 text-sm">
            Built with <HeartFilled className="text-red-500 mx-1" /> for Extreme
            Solution
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
