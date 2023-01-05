import React from "react";
import { HiOutlineChevronDown, HiChevronRight } from "react-icons/hi";

const navbarData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Shop",
    path: "/shop",
    dropdownData: [
      {
        id: 1,
        name: "Fresh food",
        data: [
          "Fruit & Nut",
          "Snack Foods",
          "Organics Nut Gifts",
          "Non-Dairy",
          "Delicius Chiken Hotdogs",
        ],
      },
      {
        id: 2,
        name: "MixedFruits",
        data: [
          "Oranges",
          "Ghee Beverages",
          "Ranch Salad",
          "Fresh avocado",
          "Fresh blueberry",
        ],
      },
      {
        id: 3,
        name: "Bananas & Plantains",
        data: [
          "Fresh Gala",
          "Fifts Mixed Fruits",
          "Fresh organic",
          "West Indian Onionsalad",
          "Vegetable tomato",
        ],
      },
      {
        id: 4,
        name: "Apples Berries",
        data: [
          "Pears Produce",
          "Fresh green orange",
          "Blackberry 100% organic",
          "Vegetable Italian Salad",
          "Special Corn Noodels",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Collection",
    path: "/collection",
    dropdownData: [
      {
        id: 1,
        name: "Bestseller",
        img: "https://cdn.shopify.com/s/files/1/0412/8151/9765/collections/banner4_560x350_crop_center.jpg?v=1595936653",
      },
      {
        id: 2,
        name: "Special Product",
        img: "https://cdn.shopify.com/s/files/1/0412/8151/9765/collections/banner6_560x350_crop_center.jpg?v=1595936651",
      },
      {
        id: 3,
        name: "Featured Product",
        img: "https://cdn.shopify.com/s/files/1/0412/8151/9765/collections/banner5_19e6fd2c-70b2-459d-b4d5-d7680262856a_560x350_crop_center.jpg?v=1595936691",
      },
    ],
  },
  {
    id: 4,
    name: "About Us",
    path: "/about",
  },
  {
    id: 5,
    name: "Faq's",
    path: "/faq's",
  },
  {
    id: 6,
    name: "Blogs",
    path: "/blogs",
  },

  {
    id: 7,
    name: "Login",
    path: "/login",
  },

  {
    id: 8,
    name: "Register",
    path: "/register",
  },
];

const renderNavbar = () => {
  return navbarData.map((navItem) => {
    return (
      <li key={navItem.id} className="menu-link">
        <a className="link-title" href="#">
          {navItem.name}
          {navItem.dropdownData ? <HiOutlineChevronDown /> : ""}
        </a>

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
                      <a className="banner">
                        <img src={dropdowmItem.img} loading="lazy" />
                      </a>
                      <a className="title">{dropdowmItem.name}</a>
                    </>
                  ) : (
                    <>
                      <a href="#">
                        <h2 className="sublink-title">{dropdowmItem.name}</h2>
                      </a>
                      <ul className="dropdown-supmenu">
                        {dropdowmItem.data.map((data) => {
                          return (
                            <li
                              key={`${navItem.name}--${dropdowmItem.id}--${data}`}
                              className="dropdown-menu-li"
                            >
                              <a href="#" className="sublink-title">
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
