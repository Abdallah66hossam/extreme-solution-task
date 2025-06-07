import { Link } from "react-router-dom";
import { HeartFilled, HomeOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import type { RootState } from "../rdx/store.ts";

const Nav = () => {
  const favourites = useSelector((state: RootState) => state.favourites.items);

  return (
    <nav className="flex items-center justify-between px-[4%] py-3 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <Link to={"/"} className="flex items-center group">
          <img
            src="/images/extreme_solution_logo.jpeg"
            alt="Extreme Solution Logo"
            className="w-10 h-10 object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="ml-2 text-red-600 font-bold text-lg hidden md:inline-block">
            Extreme Solutions
          </span>
        </Link>

        <Link
          to="/"
          className="text-gray-700 hover:text-red-600 transition-colors duration-150 flex items-center space-x-1 text-sm"
        >
          <HomeOutlined className="text-base" />
          <span className="hidden md:inline">Home</span>
        </Link>
      </div>

      <Link
        to="/favourites"
        className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-white text-red-600 border border-red-100 hover:border-red-300 hover:bg-red-50 transition-all duration-200 font-medium text-sm group"
      >
        <Badge
          count={favourites.length}
          size="small"
          color="#dc2626"
          offset={[4, 0]}
          className="scale-90 group-hover:scale-100 transition-transform"
        >
          <HeartFilled className="text-base group-hover:animate-pulse" />
        </Badge>
        <span className="hidden sm:inline-block text-sm font-semibold">
          Favourites
        </span>
      </Link>
    </nav>
  );
};

export default Nav;
