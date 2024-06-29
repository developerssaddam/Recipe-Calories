import { IoMdMenu, IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <IoMdMenu className="text-2xl" />
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-lg md:text-2xl font-bold">
          Recipe Calories
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden md:block">
          <div className="search flex bg-[#EBEBEE] p-3 rounded-full mr-3">
            <button className="mx-2">
              <IoIosSearch className="text-2xl" />
            </button>
            <input
              className="bg-[#EBEBEE] outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="profile_img">
          <button>
            <img className="w-10" src="./images/avatar.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
