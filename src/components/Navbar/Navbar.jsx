import { useState } from "react";
import { IoCartOutline, IoMenuOutline, IoClose } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = ({ routes }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-colorPrimary w-full top-0 fixed left-0 h-20 z-10  ">
        <div className="flex justify-center items-center py-6 px-16 max-w-7xl h-20  m-auto container-navbar">
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 cursor-pointer md:hidden menu-button"
          >
            {open ? <IoClose /> : <IoMenuOutline />}
          </div>

          <ul
            className={`md:flex md:items-center absolute md:static top-14 bg-colorPrimary  md:mt-0 w-full md:w-auto left-0 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            } `}
          >
            {routes.map((linknavbar, i) => {
              return (
                <li key={linknavbar.name} className="ml-8 md:my-0 my-7">
                  <Link
                    className={`cursor-pointer hover:text-buttonsAndTags `}
                    to={linknavbar.link}
                  >
                    {linknavbar.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
