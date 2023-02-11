import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import clientServer from "../../../../server/clientServer";
import { ROUTE } from "../../../../constants/Constants";
import { Carousel, Row, Col } from "antd";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import ProductItem from "../../../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
const carouselRef = React.createRef();

const buttonShopNow = (href) => (
  <Link to={href} className="btn btn-style1">
    Shop now
  </Link>
);

const buttonArrow = (arrowClassName, handleOnclick) => {
  return (
    <button
      type="button"
      className={arrowClassName}
      onClick={() => {
        handleOnclick();
      }}
    >
      {arrowClassName === "prev" ? <AiOutlineLeft /> : <AiOutlineRight />}
    </button>
  );
};

const renderSlideShow = (isActive, data) => {
  return (
    <>
      <button className="btn-prev" onClick={() => carouselRef.current.prev()}>
        <AiOutlineDoubleLeft />
      </button>
      <Carousel autoplay ref={carouselRef} speed={1000} autoplaySpeed={4000}>
        {data.map((item, index) => {
          return (
            <div
              className={isActive ? "isActive slider-image" : "slider-image"}
              key={`item.position--${index}`}
            >
              <Link to={ROUTE.PRODUCT}>
                <img src={item.img} alt="img" />
              </Link>
              <div className={`slider-text-info slider-text-${item.position}`}>
                <span>{item.thumbnail}</span>

                <h1>
                  {item.title[0]} <br /> {item.title[1]}
                </h1>

                <div>{buttonShopNow(ROUTE.PRODUCT)}</div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <button className="btn-next" onClick={() => carouselRef.current.next()}>
        <AiOutlineDoubleRight />
      </button>
    </>
  );
};

const renderSlideCategory = (categoryData, sliderRef) => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    centerPadding: "5px",
  };

  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        {categoryData.map((item) => {
          return (
            <div className="category-image" key={`${item.name}--${item.id}`}>
              <a href={ROUTE.PRODUCT}>
                <img src={item.img} alt={item.name} loading="lazy" />
                <span className="category-title">{item.name}</span>
              </a>
              <span className="category-count">{item.count} Item</span>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

const renderSlideProduct = (dataProductsTrending, sliderProductRef) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    centerPadding: "5px",
  };

  return (
    <>
      <Slider {...settings} ref={sliderProductRef}>
        {dataProductsTrending.map((item) => {
          return (
            <div className="product--item" key={`${item.id}--${item.idCategory}`}>
              <ProductItem data={item} />
            </div>
          );
        })}
      </Slider>
    </>
  );
};

const Slide = ({ type, data }) => {
  const sliderRef = useRef();
  const sliderProductRef = useRef();
  const [isActive, setActive] = useState(true);
  useEffect(() => {
    setActive(false);
  }, []);
  switch (type) {
    case "slide-show":
      return renderSlideShow(isActive, data);
    case "slide-category":
      return (
        <>
          <div className="category">
            <div className="container">
              <div className="section--title">
                <h2>Shop by category</h2>
              </div>
              <div className="section--slide">
                {buttonArrow("prev", () => {
                  sliderRef.current.slickPrev();
                })}
                {renderSlideCategory(data, sliderRef)}
                {buttonArrow("next", () => {
                  sliderRef.current.slickNext();
                })}
              </div>
            </div>
          </div>
        </>
      );
    case "slide-product-trending":
      return (
        <div className="container">
          <div className="section--title">
            <h2>Trending Products</h2>
          </div>
          <div className="section--slide">
            {renderSlideProduct(data, sliderProductRef)}
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default Slide;
