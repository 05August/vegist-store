import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide/Slide.jsx";
import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { getCategory } from "../../../redux/category.slice.js";
import { getTrendingProducts } from "../../../redux/trendingProducts.slice.js";
import { SLIDE_DATA, ROUTE } from "../../../constants/Constants";
import "./home.scss";
const HomeBody = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getTrendingProducts());
  }, []);
  const categoryData = useSelector((state) => {
    return state.category.data;
  });
  const trendingProductsData = useSelector((state) => {
    return state.trendingProducts.data;
  });
  return (
    <>
      <section className="slide-show">
        <Slide type="slide-show" data={SLIDE_DATA} />
      </section>
      <section className="bannerGrid">
        <div className="bannerGrid--container">
          <Row>
            <Col span={24} sm={{ span: 12 }} className="bannerGrid--container__block">
              <div className="banner-img">
                <a>
                  <img
                    className="img-fluid"
                    src="//cdn.shopify.com/s/files/1/0412/8151/9765/files/banner-3.jpg?v=1671689630"
                    loading="lazy"
                    alt="img"
                  />
                </a>
                <div className="banner-content">
                  <h3>Fresh fruit,vegetable on our product</h3>

                  <a href={ROUTE.PRODUCT} className="btn btn-style1">
                    Shop now
                  </a>
                </div>
              </div>
            </Col>
            <Col span={24} sm={{ span: 12 }} className="bannerGrid--container__block">
              <div className="banner-img">
                <a>
                  <img
                    className="img-fluid"
                    src="//cdn.shopify.com/s/files/1/0412/8151/9765/files/banner-1.jpg?v=1671871955"
                    loading="lazy"
                    alt="img"
                  />
                </a>
                <div className="banner-content">
                  <h3>Vegetable eggplant 100% fresh food</h3>

                  <a href={ROUTE.PRODUCT} className="btn btn-style1">
                    Shop now
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="slide-category">
        <Slide type="slide-category" data={categoryData} />
      </section>
      <section className="slide-product-trending">
        <Slide type="slide-product-trending" data={trendingProductsData} />
      </section>
    </>
  );
};

export default HomeBody;
