import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-[4%] py-5 shadow bg-white">
      <Link to={"/"}>
        <img
          src="/images/extreme_solution_logo.jpeg"
          alt="Extreme Solution Logo"
          className="w-[70px] object-contain"
        />
      </Link>
      <Link
        to="/favourites"
        className="px-4 font-medium py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 tracking-[1.6px]"
      >
        ❤️ Favourites
      </Link>
    </nav>
  );
};

export default Nav;
