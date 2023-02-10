import Slide from "./Slide/Slide.jsx";
import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import clientServer from "../../../server/clientServer";

import { SLIDE_DATA } from "../../../constants/Constants";
import "./home.scss";
const HomeBody = () => {
  const [dataCategory, setDataCategory] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [dataTrendingProduct, setDataTrendingProduct] = useState([]);

  useEffect(() => {
    clientServer
      .get("Category")
      .then((res) => {
        setDataCategory(res.data);
      })
      .catch((err) => {
        console.error("error:", err);
      });
    clientServer
      .get("trendingProducts")
      .then((res) => {
        setDataTrendingProduct(res.data);
      })
      .catch((err) => {
        console.error("error:", err);
      });
    clientServer
      .get("productDetail")
      .then((res) => {
        setDataProduct(res.data);
      })
      .catch((err) => {
        console.error("error:", err);
      });
  }, []);
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
                  />
                </a>
                <div className="banner-content">
                  <h3>Fresh fruit,vegetable on our product</h3>

                  <a className="btn btn-style1">Shop now</a>
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
                  />
                </a>
                <div className="banner-content">
                  <h3>Vegetable eggplant 100% fresh food</h3>

                  <a className="btn btn-style1">Shop now</a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="slide-category">
        <Slide type="slide-category" data={dataCategory} />
      </section>
      <section className="slide-product-trending">
        <Slide type="slide-product-trending" data={dataTrendingProduct} />
      </section>
    </>
  );
};

export default HomeBody;
