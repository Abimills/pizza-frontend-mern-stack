import "./nav.css";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IoMdPizza } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <ul className={isOpen ? "navigation" : "navigation is-closed"}>
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to={"/menu"} className="link">
          <li className="menu-li">
            Menu <IoMdPizza className="slice-of-pizza" />
          </li>
        </Link>
        <Link to="/about" className="link">
          <li>About</li>
        </Link>
        <Link to={"/service"} className="link">
          <li>Service</li>
        </Link>
      </ul>
      <div className="logo">
        <Link to={"/"} className="link">
        <h1 className="logo-text">PizzaFam</h1>
        </Link>
        <p>Serving Slice by Slice</p>
      </div>
      <div className="contact">
        <p className="number-call"> +311000-11001</p>
        <Link to={"/contact"} className="link">
          <button className="call">Contact Us</button>
        </Link>
        <Link to={"/login"} className="link">
          <button className="call">Log in</button>
        </Link>
      </div>
      <div className="cart-hamburger-container">
        <Link to={"/cart"}>
          <RiShoppingCart2Fill className="cart" />
        </Link>
        {isOpen ? (
          <TfiClose
            className="hamburger-toggle"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <RxHamburgerMenu
            className="hamburger-toggle"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      {/* <img src={leave} alt="" className="leave" /> */}
    </nav>
  );
};

export default Navbar;
