import React, { useState } from "react";
import "./NavbarStyles.css";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  const [menuClicked, setMenuClick] = useState(false);

  function handleMenuClick() {
    setMenuClick(!menuClicked);
  }

  const navBarData = [
    {
      title: "About",
      url: "/about",
      cName: "nav-link",
    },
    {
      title: "Projects",
      url: "/projects",
      cName: "nav-link",
    },
    {
      title: "Art",
      url: "/Art",
      cName: "nav-link",
    },
  ];

  function CustomLink({ to, children, ...props }) {
    //take relative or absolute path and returns full path
    const resolvedPath = useResolvedPath(to);
    //checks if entire path must match
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props} onClick={menuClicked ? handleMenuClick : ""}>
          {children}
        </Link>
      </li>
    );
  }

  return (
    <div>
      <nav className="navbar">
        <div className="home-icon">
          {!menuClicked ? (
            <VscMenu className="menu-icon" onClick={handleMenuClick} />
          ) : (
            <VscChromeClose className="menu-icon" onClick={handleMenuClick} />
          )}
          <Link to="/" className="site-title">
            Hello
          </Link>
        </div>
        <ul className={menuClicked ? "nav-menu active" : "nav-menu"}>
          {navBarData.map((item, index) => {
            return (
              <CustomLink to={item.url} className={item.cName}>
                {item.title}
              </CustomLink>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
