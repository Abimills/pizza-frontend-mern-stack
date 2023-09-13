import { useContext, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./cart.css";
import { AppContext } from "../Context/Context";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, dispatch, totalAmount, setTotalAmount } =
    useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const responses = await Promise.all(
          cart?.pizzaIds?.map((id) =>
            axios.get(`http://localhost:4000/api/${id}`)
          )
        );
        const fetchedData = responses.map((res) => {
          return {
            ...res?.data?.singlePizza,
            size:
              cart.sizes[res?.data?.singlePizza?._id] ||
              res?.data?.singlePizza?.size,
            number: cart.items[res?.data?.singlePizza._id] || 1,
          };
        });
        setData(fetchedData);
      } catch (error) {
        console.log({
          msg: "error while trying to fetch pizzas depending on cart ids ",
          error,
        });
      }
    };
    fetchPizzas();
  }, [cart]);

  const handleDelete = (idToDelete) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: idToDelete });
  };
  const handleCounter = (action, id) => {
    const updatedData = data.map((pizza) => {
      if (pizza?._id === id) {
        let newNumber = pizza.number;
        if (action === "add") {
          newNumber += 1;
        } else if (action === "subtract" && newNumber > 1) {
          newNumber -= 1;
        }
        dispatch({
          type: "UPDATE_CART_ITEM",
          payload: {
            id: pizza?._id,
            quantity: newNumber,
          },
        });
        return {
          ...pizza,
          number: newNumber,
        };
      } else {
        return pizza;
      }
    });
    setData(updatedData);
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

  useEffect(() => {
    const calculateTotal = () => {
      setTotalAmount(
        data?.reduce((acc, pizza) => {
          const newPrice = handleSizePrice(pizza?.price, pizza?.size);

          return acc + newPrice * pizza?.number;
        }, 0)
      );
    };
    calculateTotal();
  }, [cart, data]);
  // stripe logic

  return (
    <div className="total-container">
      <div className="cart-container">
        <h1 className="cart-header">Shopping Cart</h1>
        {data.length < 1 ? (
          <h1 className="nothing-cart">Your Cart is Empty</h1>
        ) : (
          data?.map((pizza) => {
            const { _id, img, name, number, size, price } = pizza;
            return (
              <div className="underline" key={_id}>
                <div className="cart-order">
                  <Link to={`/detail/${_id}`}>
                    <img src={img} alt="" className="order-img" />
                  </Link>
                  <div className="size-container">
                    <p className="order-name">{name}</p>
                    <p className="size">{size}</p>
                  </div>
                  <div className="inc-dec-order">
                    <button
                      className="dec"
                      onClick={() => handleCounter("subtract", _id)}
                    >
                      -
                    </button>
                    <p className="count-each">{number}</p>
                    <button
                      className="inc"
                      onClick={() => handleCounter("add", _id)}
                    >
                      +
                    </button>
                  </div>
                  <p className="price">${handleSizePrice(price, size)}</p>
                  <p className="price size-price">{size}</p>
                  <IoCloseOutline
                    className="close"
                    onClick={() => handleDelete(_id)}
                  />
                </div>
                <div className="line"></div>
              </div>
            );
          })
        )}
      </div>
      {totalAmount > 1 && (
        <div className="total">
          <h3>Thank you for shoping with us 🎉</h3>
          <div className="subtotal-contain">
            <p>Tax included. Shipping calculated at checkout.</p>

            <p className="subtotal">
              Subtotal: <span className="total-price"> ${totalAmount}.00 </span>{" "}
            </p>
          </div>
          <Link to={"/payment"}>
            <button className="checkout">Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
