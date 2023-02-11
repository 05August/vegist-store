import React from "react";
import { HiOutlineChevronDown, HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../constants/Constants";
import { NAVBAR_DATA } from "../../../constants/Constants";

const renderNavbar = () => {
  return NAVBAR_DATA.map((navItem) => {
    return (
      <li key={navItem.id} className="menu-link">
        <Link className="link-title" to={navItem.path}>
          {navItem.name}
          {navItem.dropdownData ? <HiOutlineChevronDown /> : ""}
        </Link>

        {navItem.dropdownData ? (
          <ul className="dropdown-menu">
            {navItem.dropdownData.map((dropdowmItem) => {
              return (
                <li
                  key={`${navItem.name}--${dropdowmItem.id}`}
                  className={dropdowmItem.img ? "menu-banner" : "megamenu-li"}
                >
                  {dropdowmItem.img ? (
                    <>
                      {" "}
                      <a href={ROUTE.PRODUCT} className="banner">
                        <img src={dropdowmItem.img} loading="lazy" />
                      </a>
                      <a href={ROUTE.PRODUCT} className="title">
                        {dropdowmItem.name}
                      </a>
                    </>
                  ) : (
                    <>
                      <a href={ROUTE.PRODUCT}>
                        <h2 className="sublink-title">{dropdowmItem.name}</h2>
                      </a>
                      <ul className="dropdown-supmenu">
                        {dropdowmItem.data.map((data) => {
                          return (
                            <li
                              key={`${navItem.name}--${dropdowmItem.id}--${data}`}
                              className="dropdown-menu-li"
                            >
                              <a href={ROUTE.PRODUCT} className="sublink-title">
                                {data}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <></>
        )}
      </li>
    );
  });
};

const Navbar = () => <ul className="main-menu">{renderNavbar()}</ul>;

export default Navbar;
