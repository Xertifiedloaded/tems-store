import React, { useContext } from "react";
import classes from "./product.module.css";
import { UserContext } from "../contextApi/userContextApi";
import { ReactComponent as Star } from "../../assets/images/star.svg";
const Product = () => {
  const { cartData, search, setSearch, handleSearch } = useContext(UserContext);
  return (
    <>
      <main>
        <div className={classes.main}>
          <div className={classes.search}>
            <input
              type="text"
              placeholder="search for product"
              onChange={handleSearch}
            />
          </div>
          <div className={classes.product}>
            {cartData
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, i) => (
                <ProductItems item={item} key={i} />
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
const ProductItems = ({ item }) => {
  return (
    <>
      <div key={item.key} className={classes.card}>
        <img src={item.image} alt="" />
        <div className={classes.content}>
          <h2>{item.name}</h2>
          <h4>$ {item.price}</h4>
          <div className={classes.star}>
            {item.star}
            {item.star2}
            {item.star3}
            {item.star4}
            {item.star5}
          </div>

          <div className={classes.btn}>
            <button>
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
