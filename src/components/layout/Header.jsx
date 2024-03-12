import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5 select-none">
      <NavLink
        to="/"
        className="absolute left-[200px] font-extrabold text-4xl text-transparent bg-clip-text bg-primary-gradient"
      >
        WATCH ...
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-primary font-medium text-xl" : "font-medium text-xl"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? "text-primary font-medium text-xl" : "font-medium text-xl"
        }
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
