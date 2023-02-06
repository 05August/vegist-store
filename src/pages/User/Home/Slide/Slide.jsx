import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import clientServer from "../../../../server/clientServer";
import { Carousel, Row, Col } from "antd";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
const carouselRef = React.createRef();

const buttonShopNow = (href) => (
  <a href={href} className="btn btn-style1">
    Shop now
  </a>
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
              <a href="#">
                <img src={item.img} />
              </a>
              <div className={`slider-text-info slider-text-${item.position}`}>
                <span>{item.thumbnail}</span>

                <h1>
                  {item.title[0]} <br /> {item.title[1]}
                </h1>

                <div>{buttonShopNow("#")}</div>
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

const renderSlideCategory = (dataCategory, sliderRef) => {
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
        {dataCategory.map((item) => {
          return (
            <div className="category-image" key={`${item.name}--${item.id}`}>
              <a href="#">
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

const Slide = ({ type, data }) => {
  const sliderRef = useRef();

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
          <section className="category">
            <div className="category--container">
              <div className="category--title">
                <h2>Shop by category</h2>
              </div>
              <div className="category--slide">
                {buttonArrow("prev", () => {
                  sliderRef.current.slickPrev();
                })}
                {renderSlideCategory(data, sliderRef)}
                {buttonArrow("next", () => {
                  sliderRef.current.slickNext();
                })}
              </div>
            </div>
          </section>
        </>
      );
    default:
      return <></>;
  }
};

export default Slide;
