import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { MAX_SEARCH_RESULT_ITEM } from "../../constants/Constants";
import { convertPriceToVnd } from "../../until/convertPrice.js";
import { getProductsDetail } from "../../redux/productsDetail.slice";
import { ROUTE } from "../../constants/Constants";
import "../Header/header.scss";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getProductsDetail());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const listProduct = useSelector((state) => {
    return state.productsDetail.data;
  });

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
                    to={`${ROUTE.PRODUCT}/${item.productId}`}
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
                <li key={`key--${index}`} style={{ borderBottom: "unset" }}>
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
    <div className="header__element search">
      <form
        action="/search"
        onSubmit={(e) => {
          e.preventDefault();
          searchParams.set("keyword", searchValue.trim().toLowerCase());
          setSearchParams(searchParams);
          setIsActive(false);
          navigate(ROUTE.PRODUCT);
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
  );
};

export default Search;
