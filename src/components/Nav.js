import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <div className="shadow-xl sticky top-0">
      <Navbar fluid={true} rounded={true}>
      <NavLink className={'text-4xl bg-clip-text bg-gradient-to-r from-lime-700 to-red-700 italic font-bold text-transparent'} to=''>
        Simple Test
      </NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-blue-500' : undefined
            } to="/home"><span className="font-bold">Home</span></NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-blue-500' : undefined
            } to="/statistics"><span className="font-bold">Statistics</span></NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-blue-500' : undefined
            } to="/blog"><span className="font-bold">Blog</span></NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default Nav;
