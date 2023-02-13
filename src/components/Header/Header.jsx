import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Search from "../../components/Search/Search";
import logo from "../../assets/img/logo.png";
import { ShoppingOutlined, HeartOutlined } from "@ant-design/icons";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { ROUTE } from "../../constants/Constants";
import "./header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [searchKey, setSearchKey] = useState(0);

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
          <div className="header__element logo">
            <Link
              onClick={() => {
                setSearchKey(searchKey + 1);
              }}
              to={ROUTE.HOME}
            >
              <img src={logo} alt="vegist"></img>
            </Link>
          </div>

          <Search key={searchKey} />
          <div className="header__element shop-element">
            <div className="acc">
              <AiOutlineUser />
              <div className="acc__container">
                <Link to={ROUTE.ACCOUNT}>Account</Link>
                <div className="acc__lo">
                  <Link to={ROUTE.REGISTER}>Register</Link>
                  <Link to={ROUTE.LOGIN}>Login</Link>
                </div>
              </div>
            </div>
            <div className="wishlist">
              <Link className="wishlist-icon" to={ROUTE.WISHLIST}>
                <HeartOutlined />
                <span className="wishlist-counter">0</span>
              </Link>
            </div>
            <div className="cart">
              <Link className="cart-icon" onClick={showCart}>
                <ShoppingOutlined />
                <span id="cart-total" className="bigcounter">
                  0
                </span>
              </Link>
              <Drawer
                placement="right"
                onClose={onClose}
                open={open}
                closeIcon={<IoIosClose fontSize="30px" />}
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
            <Navbar searchKey={searchKey} setSearchKey={setSearchKey} />
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
