import { Rate } from "antd";
import { convertPriceToVnd } from "../../until/convertPrice";
import "./ProductItem.scss";

const discount = (newPrice, oldPrice) => {
  return 100 - Math.round((parseInt(newPrice) / parseInt(oldPrice)) * 100);
};

const ProductItem = ({ data }) => {
  return data ? (
    <>
      <div className="product--item__img">
        <a className="product--img" href="#">
          <img className="img--fruit img--before" src={data.img[0]} alt="Ảnh trái cây" />
          <img className="img--fruit img--after" src={data.img[1]} alt="Ảnh trái cây" />
        </a>
        {data.oldPrice ? (
          <div className="product--discount">
            -{discount(data.newPrice, data.oldPrice)}%
          </div>
        ) : (
          <></>
        )}
        <div className="product--action"></div>
      </div>
      <div className="product--item__content">
        <a href="#" className="product-title">
          {data.name}
        </a>
        <div className="product-rating">
          <Rate allowHalf disabled defaultValue={data.rate} />
        </div>
        <div className="product-price">
          <span className="new-price">{convertPriceToVnd(data.newPrice)}</span>
          {data.oldPrice ? (
            <span className="old-price">{convertPriceToVnd(data.oldPrice)}</span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default ProductItem;
