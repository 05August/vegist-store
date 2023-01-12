import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import logo from "../../assets/img/logo.png";
import { ShoppingOutlined, HeartOutlined } from "@ant-design/icons";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Drawer } from "antd";
import "./header.scss";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);

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
            <img src={logo} alt="vegist"></img>
          </div>
          <div className="header--element search">
            <form action="/search" onSubmit={() => {}}>
              <input
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                placeholder="Search our store"
              />
              <button type="submit">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </button>
            </form>
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
