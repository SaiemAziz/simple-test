import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <NavLink className={'text-4xl bg-clip-text bg-gradient-to-r from-lime-700 to-red-700 italic font-bold text-transparent'} to=''>
        Simple Test
      </NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-green-400' : undefined
            } to=""><span className="font-bold">Home</span></NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-green-400' : undefined
            } to="statistics"><span className="font-bold">Statistics</span></NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-green-400' : undefined
            } to="blog"><span className="font-bold">Blog</span></NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
