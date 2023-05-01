import React, { useContext } from "react";
import classes from "./product.module.css";
import { UserContext } from "../contextApi/userContextApi";
import Star from "../../assets/images/star.svg";
import Close from "../../assets/images/icon-close-menu.svg";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { FaStar, FaEye, FaOpencart } from "react-icons/fa";

const Product = () => {
  const [number, setNumber] = useState(0);
  const [hover, setHover] = useState(null);
  const [modal, setModal] = useState(false);
  const [rating, setRating] = useState(null);
  const {
    products,
    setProducts,
    addToCart,
    setSearch,
    handleValue,
    handleSearch,
    search,
  } = useContext(UserContext);
  const showRating = () => {
       switch (rating) {
         case 0:
           return "poor";
         case 1:
           return "Dissatisation";
         case 2:
           return "unSatisfied";
         case 3:
           return "normal";
         case 4:
           return "satisfied";
         case 5:
           return "very satisfied";
         default:
           return "rate";
       }
  }
  const handleRating = () => {
    switch (number) {
      case 0:
        return "poor";
      case 1:
        return "Dissatisation";
      case 2:
        return "unSatisfied";
      case 3:
        return "normal";
      case 4:
        return "satisfied";
      case 5:
        return "very satisfied";
      default:
        return "rate";
    }
  };
  const handleComplains = () => {
    switch (number) {
      case 0:
        return "comment here";
      case 1:
      case 2:
      case 3:
      case 4:
        return "what is your problem";
      case 5:
        return "why do you like this product";
    }
  };
  const filteredProduct = products.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "Bra" ||
      item.category === "women's clothing" ||
      item.category === "Night wear" ||
      item.category === "panties"
    );
  });
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <main>
        <div className={classes.box}>
          {filteredProduct
            .filter((item) => {
              if (search == "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((product, id) => {
              return (
                <>
                  <ProductItems
                    key={id}
                    addToCart={addToCart}
                    product={product}
                    id={id}
                    hover={hover}
                    setHover={setHover}
                    Star={Star}
                    number={number}
                    handleRating={handleRating}
                    setNumber={setNumber}
                    toggleModal={toggleModal}
                    modal={modal}
                  />
                </>
              );
            })}
        </div>
      </main>
    </>
  );
};

export default Product;
const ProductItems = ({
  Star,
  product,
  addToCart,
  price,
  rating,
  title,
  image,
  number,
  setNumber,
  rate,
  id,
  stars,
  modal,
  key,
  hover,
  setHover,
  handleRating,
  toggleModal,
}) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={product.image} alt="" />
        </div>
        <div className={classes.flexAll}>
          <Link to="#">
            <h2>{product.title}</h2>
          </Link>
          <h2>$ {product.price}</h2>
          <h2>{product.rating.rate}</h2>
          <div className={classes.btn}>
            <button onClick={() => addToCart(product)}>+</button>
            <Link to=""></Link>
            <button onClick={toggleModal}>
              <FaEye />
            </button>
          </div>
        </div>
      </div>
      {modal && (
        <div className={classes.modal}>
          <div key={product.id} className={classes.hambug}>
            <div className={classes.close}>
              <img onClick={toggleModal} src={Close} alt="" />
            </div>
            <div className={classes.modalComponent}>
              <div className={classes.Star}>
                <div className={classes.modalImg}>
                  <img src={`${product.image}`} alt="" />
                </div>
              </div>

              <div className={classes.rating}>
                <div>{product.title}</div>
                <div>{product.price}</div>
                <div>
                  {[...Array(5)].map((items, index) =>
                    number >= index + 1 ? (
                      <FaStar
                        {...items}
                        key={index}
                        onClick={() => setNumber(index)}
                        style={{ color: "orange" }}
                      />
                    ) : (
                      <FaStar onClick={() => setNumber(index + 1)} />
                    )
                  )}
                </div>
                <div>{handleRating()}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
