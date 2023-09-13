import config from "../../config";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import peel from "../../assets/images/pizzahandle.png";
import gray from "../../assets/images/gray.png";
import { useParams } from "react-router-dom";
import { GiFullPizza } from "react-icons/gi";
import "./single.css";
import { AppContext } from "../Context/Context";
const SinglePizza = () => {
  const { id } = useParams();
  const { dispatch, cart } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [pizzaSize, SetPizzaSize] = useState(cart.sizes[id] || "medium");

  const fetch = async () => {
    try {
      const res = await axios.get(`${config?.URL_BASE}/${id}`);
      setData(res.data);
    } catch (error) {
      console.log({
        msg: "error whiling trying to create a singlePizza page",
        error,
      });
    }
  };
  const handleSize = (id, pizzaSize) => {
    if (pizzaSize === "small") {
      SetPizzaSize("small");
      dispatch({
        type: "UPDATE_CART_SIZE",
        payload: {
          id,
          size: pizzaSize,
        },
      });
    } else if (pizzaSize === "medium") {
      SetPizzaSize("medium");
      dispatch({
        type: "UPDATE_CART_SIZE",
        payload: {
          id,
          size: pizzaSize,
        },
      });
    } else if (pizzaSize === "large") {
      SetPizzaSize("large");
      dispatch({
        type: "UPDATE_CART_SIZE",
        payload: {
          id,
          size: pizzaSize,
        },
      });
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  const handleAddCart = (id) => {
    const find = cart?.pizzaIds?.find((item) => item === id);
    if (find) {
      alert(`You already added item to Cart`);
    } else {
      dispatch({ type: "ADD_TO_CART", payload: id });
    }
  };
  const handleSizePrice = (price, size) => {
    if (size === "small") {
      return price - 4;
    } else if (size === "medium") {
      return price;
    } else if (size === "large") {
      return price + 4;
    }
  };

  return (
    <div className="single-pizza-container">
      <div className="lefter-side">
        <p className="best-pizza-header">
          Category : {data?.singlePizza?.category}
        </p>
        <div className="size-price-container">
          <p className="price-indiv">Choose your size</p>

          <div className="pizza-size-contain">
            <div className="choose-container">
              <GiFullPizza
                className="small"
                onClick={() => handleSize(data?.singlePizza?._id, "small")}
              />
              <span>Small</span>
            </div>
            <div className="choose-container">
              <GiFullPizza
                className="medium"
                onClick={() => handleSize(data?.singlePizza?._id, "medium")}
              />
              <span>Medium</span>
            </div>
            <div className="choose-container">
              <GiFullPizza
                className="large"
                onClick={() => handleSize(data?.singlePizza?._id, "large")}
              />
              <span>Large</span>
            </div>
          </div>
        </div>
        <p className="real-price">
          {`${pizzaSize} :   $${handleSizePrice(
            data?.singlePizza?.price,
            pizzaSize
          )}`}
        </p>
        <p className="single-pizza-name">{data?.singlePizza?.name}</p>
        <div className="desc-written">
          <p className="desc-header">description</p>
          <p className="single-pizza-description">
            {data?.singlePizza?.description}
          </p>
        </div>
        <div className="number-pizza-container">
          <button
            className="add-to-cart single-btn"
            onClick={() => handleAddCart(data?.singlePizza?._id)}
          >
            Add to Cart
          </button>
        </div>
        <img src={gray} alt="" className="gray" />
      </div>
      <div className="righter-side">
        <img src={`${data?.singlePizza?.img}`} alt="" className="pizza-indiv" />
        <img src={peel} alt="" className="peel" />
        {/* <img src={blue} alt="" className="blue" /> */}
      </div>
    </div>
  );
};

export default SinglePizza;
