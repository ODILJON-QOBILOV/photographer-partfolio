import React from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../../assets/Logo.svg";


const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <NavLink to={"/"} className={'logoLink'}>
          <img src={Logo} alt="" />
        </NavLink>
        <nav>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={"about"}
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            About Me
          </NavLink>
          <NavLink
            to={"portfolio"}
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Portfolio
          </NavLink>
          <NavLink
            to={"services"}
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Services
          </NavLink>
        </nav>
        <button onClick={() => {
          navigate('contact')
        }}>Contact me</button>
      </header>
    </>
  );
};

export default Header;
