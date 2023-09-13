import "./payment.css";
import { BsFillBalloonHeartFill } from "react-icons/bs";
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
          We're thrilled that you ordered delicious pizza from our website! 🍕
          Thank you so much for choosing us. Your order not only made our day
          but also keeps us excited to serve you again in the future. We can't
          wait to cook up more mouthwatering creations for you. If you ever
          crave another slice or have any special requests, just know we're
          here, ready to make your pizza dreams come true. Your next order is
          something we're already looking forward to!
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
