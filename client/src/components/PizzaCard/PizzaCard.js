import "./card.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
const PizzaCard = ({ pizza }) => {
  const { _id, name, price, description, img } = pizza;
  const { dispatch, cart } = useContext(AppContext);

  const handleAddCart = (id) => {
    const find = cart?.pizzaIds?.find((item) => item === id);
    if (find) {
      alert(`You already added item to Cart`);
    } else {
      dispatch({ type: "ADD_TO_CART", payload: id });
    }
  };
  

  return (
    <div className="pizza-card">
      <Link to={`/detail/${_id}`}>
        <img src={img} alt="" className="pizza-img" />
      </Link>
      <div className="description-container">
        <h6 className="pizza-name">{name}</h6>
        <p> ${price}</p>
      </div>
      <p className="description">{description}</p>
      <button className="add-to-cart" onClick={() => handleAddCart(_id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default PizzaCard;
