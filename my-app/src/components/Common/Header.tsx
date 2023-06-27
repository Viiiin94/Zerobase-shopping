import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import DarkModeHeader from "./HeaderCommon/DarkModeHeader";
import DropdownHeader from "./HeaderCommon/DropdownHeader";

const Header = () => {
  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-gray-900 text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto">
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
          <Link
            to="/"
            className="text-lg font-bold whitespace-nowrap text-gray-700 dark:text-white"
          >
            YB Shop
          </Link>
        </h1>
        <div className="flex-none hidden md:flex md:flex-1 ml-2">
          <Link
            to="/fashion"
            className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
          >
            패션
          </Link>
          <Link
            to="/accessory"
            className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
          >
            악세서리
          </Link>
          <Link
            to="/digital"
            className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
          >
            디지털
          </Link>
        </div>
        <div className="flex items-center px-2">
          <DarkModeHeader />
          <DropdownHeader />
          <Link to="/cart" className="btn btn-ghost w-10 sm:w-12 ml-1">
            <span className="relative">
              <FiShoppingCart className="text-black dark:text-white font-bold" />
              <span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
                0
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
