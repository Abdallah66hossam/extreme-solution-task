import { Link } from "react-router-dom";
import { HeartFilled, HomeOutlined, BulbOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { useSelector } from "react-redux";
import type { RootState } from "../rdx/store.ts";
import useTheme from "../hooks/useTheme.tsx";

const Nav = () => {
  const favourites = useSelector((state: RootState) => state.favourites.items);
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <nav className="flex items-center justify-between px-[4%] py-3 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 shadow-sm dark:shadow-md">
      <div className="flex items-center space-x-6">
        <Link to="/" className="flex items-center group">
          <img
            src="/images/extreme_solution_logo.jpeg"
            alt="Extreme Solution Logo"
            className="w-10 h-10 object-contain transition-transform duration-200 group-hover:scale-105 rounded"
          />
          <span className="ml-2 text-red-600 dark:text-red-400 font-bold text-lg hidden md:inline-block">
            Extreme Solution
          </span>
        </Link>

        <Link
          to="/"
          className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-150 flex items-center space-x-1 text-sm"
        >
          <HomeOutlined className="text-base" />
          <span className="hidden md:inline">Home</span>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          icon={<BulbOutlined />}
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-red-500 hover:border-red-400 dark:hover:text-red-400 transition-all"
        >
          {isDark ? "Light" : "Dark"} Mode
        </Button>

        <Link
          to="/favourites"
          className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-white dark:bg-gray-800 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-400 hover:border-red-300 hover:bg-red-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium text-sm group"
        >
          <Badge
            count={favourites.length}
            size="small"
            color="#dc2626"
            offset={[4, 0]}
            className="scale-90 group-hover:scale-100 transition-transform"
          >
            <HeartFilled className="text-base group-hover:animate-pulse dark:text-red-300" />
          </Badge>
          <span className="hidden sm:inline-block text-sm font-semibold">
            Favourites
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
