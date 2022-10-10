import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <NavLink className={'text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 italic font-bold text-transparent'} to=''>
        Simple Test
      </NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-blue-400' : undefined
            } to="home">Home</NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-blue-400' : undefined
            } to="">Home</NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-blue-400' : undefined
            } to="">Home</NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-blue-400' : undefined
            } to="">Home</NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-blue-400' : undefined
            } to="">Home</NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
