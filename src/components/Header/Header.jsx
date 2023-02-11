import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar/Navbar";
import logo from "../../assets/img/logo.png";
import { ShoppingOutlined, HeartOutlined } from "@ant-design/icons";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "antd";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { MAX_SEARCH_RESULT_ITEM } from "../../constants/Constants";
import { convertPriceToVnd } from "../../until/convertPrice.js";
import { getProductsDetail } from "../../redux/productsDetail.slice";
import { ROUTE } from "../../constants/Constants";
import "./header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getProductsDetail());
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navigate = useNavigate();
  const listProduct = useSelector((state) => {
    return state.productsDetail.data;
  });
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
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseOut={() => {
          setIsHover(false);
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
                  <Link
                    onClick={() => {
                      setIsActive(false);
                    }}
                    to={`${ROUTE.PRODUCT}/${item.idProduct}`}
                  >
                    <div className="thumbnail">
                      <img src={item.img} alt="img" />
                    </div>
                    <div className="text-content">
                      <h6>{item.name}</h6>
                      <div className="price-box">
                        <span className="new-price">
                          {convertPriceToVnd(item.newPrice)}
                        </span>
                        {item.oldPrice ? (
                          <span className="old-price">
                            {convertPriceToVnd(item.oldPrice)}
                          </span>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </Link>
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
                    <div
                      onClick={() => {
                        searchParams.set("keyword", searchValue.trim().toLowerCase());
                        setSearchParams(searchParams);
                        setIsActive(false);
                        navigate(ROUTE.PRODUCT);
                      }}
                    >
                      See all results ({searchResults.length - 10})
                    </div>
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
            <Link to={ROUTE.HOME}>
              <img src={logo} alt="vegist"></img>
            </Link>
          </div>
          <div className="header--element search">
            <form
              action="/search"
              onSubmit={(e) => {
                e.preventDefault();
                searchParams.set("keyword", searchValue.trim().toLowerCase());
                setSearchParams(searchParams);
                setIsActive(false);
                navigate("/product");
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
                  if (!isHover) {
                    setIsActive(false);
                  }
                }}
                placeholder="Search our store"
                required
              />
              <button type="submit">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </button>
            </form>
            {renderSearchResults()}
          </div>
          <div className="header--element shop-element">
            <div className="acc">
              <AiOutlineUser />
              <div className="acc--container">
                <Link to={ROUTE.ACCOUNT}>Account</Link>
                <div className="acc--lo">
                  <Link to={ROUTE.REGISTER}>Register</Link>
                  <Link to={ROUTE.LOGIN}>Login</Link>
                </div>
              </div>
            </div>
            <div className="wishlist">
              <a className="wishlist-icon" href={ROUTE.WISHLIST}>
                <HeartOutlined />
                <span className="wishlist-counter">0</span>
              </a>
            </div>
            <div className="cart">
              <a className="cart-icon" onClick={showCart}>
                <ShoppingOutlined />
                <span id="cart-total" className="bigcounter">
                  0
                </span>
              </a>
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
