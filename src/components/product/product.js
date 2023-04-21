import React, { useContext } from "react";
import classes from "./product.module.css";
import { UserContext } from "../contextApi/userContextApi";
import { ReactComponent as Star } from "../../assets/images/star.svg";
import Bra from "../../assets/images/bra1.webp";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const { products, setProducts, handleSearch, addToCart } =
    useContext(UserContext);

  const filteredProduct = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <>
      <main>
        <div className={classes.box}>
          {filteredProduct.map((product,id) => (
            <ProductItems
              {...product}
              key={id}
              addToCart={addToCart}
              product={product}
             id={id}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Product;
const ProductItems = ({ product,  addToCart,price,title,image,id, key }) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={image} alt="" />
        </div>
        <div>{product.category}</div>
        <Link to="#">
          <h2>$ {title}</h2>
        </Link>
        <h2>$ {price}</h2>
        <div className={classes.btn}>
          <button onClick={() => addToCart(product)}>+</button>
          <Link to="">
          </Link>
        </div>
      </div>
    </>
  );
};
