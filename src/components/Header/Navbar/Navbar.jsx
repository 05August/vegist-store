import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../constants/Constants";
import { NAVBAR_DATA } from "../../../constants/Constants";
import { useNavigate } from "react-router-dom";

const Navbar = ({ searchKey, setSearchKey }) => {
  let navigate = useNavigate();

  const handleClickNav = (path) => {
    setSearchKey(searchKey + 1);
    navigate(path);
  };

  return (
    <ul className="main-menu">
      {NAVBAR_DATA.map((navItem) => (
        <li
          key={navItem.id}
          className="menu-link"
          onClick={() => handleClickNav(navItem.path)}
        >
          <div className="link-title">
            {navItem.name}
            {navItem.dropdownData ? <HiOutlineChevronDown /> : ""}
          </div>

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
                        <Link to={ROUTE.PRODUCT} className="banner">
                          <img src={dropdowmItem.img} loading="lazy" alt="img" />
                        </Link>
                        <Link to={ROUTE.PRODUCT} className="title">
                          {dropdowmItem.name}
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to={ROUTE.PRODUCT}>
                          <h2 className="sublink-title">{dropdowmItem.name}</h2>
                        </Link>
                        <ul className="dropdown-supmenu">
                          {dropdowmItem.data.map((data) => {
                            return (
                              <li
                                key={`${navItem.name}--${dropdowmItem.id}--${data}`}
                                className="dropdown-menu-li"
                              >
                                <Link to={ROUTE.PRODUCT} className="sublink-title">
                                  {data}
                                </Link>
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
      ))}
    </ul>
  );
};

export default Navbar;
