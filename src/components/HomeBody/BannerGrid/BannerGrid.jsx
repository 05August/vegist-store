import React from "react";
import { Col, Row } from "antd";
import "./bannerGrid.scss";

const BannerGrid = () => {
  return (
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
  );
};

export default BannerGrid;
