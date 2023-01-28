import React from "react";
import { Carousel } from "antd";
import slider1 from "../../../assets/img/slider1-min.webp";
import slider2 from "../../../assets/img/slider2.webp";
import slider3 from "../../../assets/img/slider3_7f623fd1-a932-4b5c-92c7-292044869712.webp";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./slider.scss";
const carouselRef = React.createRef();

const button = (href) => (
  <a href={href} className="btn btn-style1">
    Shop now
  </a>
);

const Slider = () => (
  <section className="slider">
    <button className="btn-prev" onClick={() => carouselRef.current.prev()}>
      <AiOutlineDoubleLeft />
    </button>
    <Carousel autoplay ref={carouselRef} speed="1000">
      <div className="slider-image">
        <a href="#">
          <img src={slider1} />
        </a>
        <div className="slider-text-info slider-text-left">
          <span>Summer vege sale</span>

          <h1>
            Fresh fruits <br /> &amp; vegetable
          </h1>

          {button("#")}
        </div>
      </div>
      <div className="slider-image">
        <a href="#">
          <img src={slider2} />
        </a>
        <div className="slider-text-info slider-text-right">
          <span>Organic indian masala</span>

          <h1>
            Prod of indian <br /> 100% packaging
          </h1>
          {button("#")}
        </div>
      </div>
      <div className="slider-image">
        <a href="#">
          <img src={slider3} />
        </a>
        <div className="slider-text-info slider-text-center">
          <span>Top selling!</span>

          <h1>Fresh for your heath</h1>
          {button("#")}
        </div>
      </div>
    </Carousel>
    <button className="btn-next" onClick={() => carouselRef.current.next()}>
      <AiOutlineDoubleRight />
    </button>
  </section>
);
export default Slider;
