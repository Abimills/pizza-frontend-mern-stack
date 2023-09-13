import "./footer.css";
import { SlCallIn } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-side-footer">
        <h3 className="never">PizzaFam</h3>
        <p>Serving Slice by Slice</p>
        <ul className="navigation-footer">
          <Link to={"/"} className="link">
            <li className="nav-footer">Home</li>
          </Link>
          <Link to={"/about"} className="link">
            <li className="nav-footer">About</li>
          </Link>
          <Link to={"/service"} className="link">
            <li className="nav-footer">Service</li>
          </Link>
        </ul>
      </div>
      <div className="center-footer">
        <p> @copyright claim</p>
        <p>
          &copy; {new Date().getFullYear()} AbelT. All Rights Reserved. Abel T.
        </p>
      </div>
      <div className="right-side-footer">
        <h3>Contact Us</h3>
        <SlCallIn /> <span>+311000-11001</span> <br />
        <IoLocationSharp /> <span>AbelStreet-123 Utrecht Netherlands</span>
      </div>
    </div>
  );
};

export default Footer;
