import "./payment.css";
import {BsFillBalloonHeartFill} from "react-icons/bs"
import { IoPizza } from "react-icons/io5";
import { TbPizza } from "react-icons/tb";
import { IoIosPizza } from "react-icons/io";

function Completion(props) {
  return (
    <div className="pizza-finish-payment">
      <h1 className="thank-you">Your order is on the way!</h1>
      <div className="pizza-icon-container">
        <IoPizza className="pizza-icon one" />
        <TbPizza className="pizza-icon two" />
        <IoIosPizza className="pizza-icon three" />
        <TbPizza className="pizza-icon" />
      </div>
      <div className="text-container">
        <p className="smart-text-pizza">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          omnis laboriosam sapiente reprehenderit nisi sed voluptatum earum!
          Perferendis in ex dignissimos sequi quaerat!
        </p>
      </div>
      <div className="icons-container">
        <BsFillBalloonHeartFill />
        <p>🎉</p>
      </div>
      <p className="pizzafam-thank">Thank you for choosing pizzaFam</p>
    </div>
  );
}

export default Completion;
