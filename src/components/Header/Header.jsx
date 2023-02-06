import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import logo from "../../assets/img/logo.png";
import { ShoppingOutlined, HeartOutlined } from "@ant-design/icons";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Drawer } from "antd";
import clientServer from "../../server/clientServer";
import { useSearchParams } from "react-router-dom";
import { MAX_SEARCH_RESULT_ITEM } from "../../constants/Constants";
import "./header.scss";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [listProduct, setListProduct] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    clientServer
      .get("products")
      .then((res) => {
        setListProduct(res.data);
      })
      .catch((err) => {
        console.error("error:", err);
      });
  }, []);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showCart = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const renderSearchResults = () => {
    return (
      <ul
        className="search-results"
        style={{
          display: isActive === true ? "flex" : "none",
          padding:
            searchValue.length === 0 && searchResults.length === 0
              ? "0px"
              : "15px 15px 0 0",
        }}
      >
        {searchResults.length === 0 && searchValue ? (
          <li style={{ borderBottom: "unset" }}>
            <span className="title">
              <p>Your search for "{searchValue}" did not yield any results.</p>
            </span>
          </li>
        ) : (
          searchResults.map((item, index) => {
            if (index < MAX_SEARCH_RESULT_ITEM) {
              return (
                <li key={`${item.name}--${item.id}`}>
                  <a href="#">
                    <div className="thumbnail">
                      <img src={item.img} />
                    </div>
                    <div className="text-content">
                      <h6>{item.name}</h6>
                      <div className="price-box">
                        <span className="new-price">
                          {item.newPrice.toLocaleString("vi", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                        {item.oldPrice ? (
                          <span className="old-price">
                            {item.oldPrice.toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </a>
                </li>
              );
            }
            if (index === MAX_SEARCH_RESULT_ITEM) {
              return (
                <li
                  key={`key--${searchResults.length}`}
                  style={{ borderBottom: "unset" }}
                >
                  <span className="title">
                    <a href="#">See all results ({searchResults.length - 10})</a>
                  </span>
                </li>
              );
            }
          })
        )}
      </ul>
    );
  };
  return (
    <header id="header" className={offset > 50 ? "is-sticky" : ""}>
      <section className="header__top">
        <p>
          <span>Free shipping </span>
          orders from all item
        </p>
      </section>
      <section className="header__main">
        <div className="header__main--top">
          <div className="header--element logo">
            <a href="#">
              <img src={logo} alt="vegist"></img>
            </a>
          </div>
          <div className="header--element search">
            <form
              action="/search"
              onSubmit={(e) => {
                e.preventDefault();
                searchParams.set("keyword", searchValue.trim().toLowerCase());
                setSearchParams(searchParams);
              }}
            >
              <input
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  const fillProduct = listProduct.filter((item) =>
                    item.name.toLowerCase().includes(e.target.value || "")
                  );
                  setSearchResults(fillProduct);
                }}
                onFocus={() => {
                  setIsActive(true);
                }}
                onBlur={() => {
                  setIsActive(false);
                }}
                placeholder="Search our store"
                required
              />
              <button
                type="submit"
                onClick={() => {
                  searchParams.set("keyword", searchValue.trim().toLowerCase());
                  setSearchParams(searchParams);
                }}
              >
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </button>
            </form>
            {renderSearchResults()}
          </div>
          <div className="header--element shop-element">
            <div className="acc">
              <AiOutlineUser />
              <div className="acc--container">
                <a href="#">Account</a>
                <div className="acc--lo">
                  <a href="#">Register</a>
                  <a href="#">Login</a>
                </div>
              </div>
            </div>
            <div className="wishlist">
              <a href="#">
                <HeartOutlined />
                <span className="wishlist-counter">0</span>
              </a>
            </div>
            <div className="cart">
              <a href="#" onClick={showCart}>
                <ShoppingOutlined />
                <span id="cart-total" className="bigcounter">
                  0
                </span>
              </a>
              <Drawer
                placement="right"
                onClose={onClose}
                open={open}
                closeIcon={<IoIosClose font-size="30px" />}
                headerStyle={{ border: "none", padding: "10px 10px 0px 10px" }}
                bodyStyle={{ paddingTop: "0px" }}
              >
                <p>No products in the cart.</p>
              </Drawer>
            </div>
          </div>
        </div>
        <div className="header__main--menu">
          <nav>
            <Navbar />
          </nav>
          <div className="call-line">
            <a href="tel:0123 456 789">
              <div className="icon-block">
                <MdOutlineHeadsetMic />
              </div>
              <div className="contact-block">
                <span>Hotline:</span>
                <span>0123 456 789</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
