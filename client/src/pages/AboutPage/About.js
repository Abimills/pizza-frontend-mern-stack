import "./about.css";
import roller from "../../assets/images/roller-removebg-preview.png";
import chef from "../../assets/images/chef.png";

const About = () => {
  return (
    <div className="about-section">
      <h1 className="chef-header">What Our Top chefs Got To Say ?</h1>
      <div className="about-sub">
        <div className="left-side">
          <div className="chef-container">
            <img src={chef} alt="chef" className="chef" />
            <p className="our-top">
              As a chef at our pizza house, I blend fresh ingredients, unique
              flavors, and timeless techniques to craft pizza perfection. Each
              pizza is a culinary masterpiece, redefining your expectations, one
              slice at a time
            </p>
          </div>
        </div>
        <div className="center-side">
          <img src={roller} alt="divider" className="divider" />
        </div>
        <div className="right-side">
          <h1>
            Our fast delivery system seamlessly bridges the gap between our oven
            and your table, ensuring hot, delicious pizzas at your doorstep in
            no time.
          </h1>
          <p>Serving Slice by Slice</p>
        </div>
      </div>
    </div>
  );
};

export default About;
