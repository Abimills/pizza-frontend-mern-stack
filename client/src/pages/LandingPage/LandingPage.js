import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
import greener from "../../assets/images/greener.png";
import blue2 from "../../assets/images/blue2.png";
import paparika from "../../assets/images/paparika.png";
import tomatoe from "../../assets/images/tomatoe.png";
import layered from "../../assets/images/layeredpic.png";
import coca from "../../assets/images/coca.png";
import semi from "../../assets/images/semi2.png";
import pizzaHandle from "../../assets/images/pizzamalet.png";
import "./landing.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Fish");

  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState([]);
  const fetch = async () => {
    const res = await axios.get(`${config?.URL_BASE}`);
    setData(res?.data);
  };
  const filterData = (data, category) => {
    if (category === "All") {
      setFilteredData(data?.pizzas);
      setActiveCategory("All");
    } else {
      setFilteredData(
        data?.pizzas?.filter(
          (pizza) => pizza?.category.toLowerCase() === category.toLowerCase()
        )
      );
      setActiveCategory(category);
    }
  };
  
  useEffect(() => {
    fetch();
  }, []);
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setCategory([
      "All",
      ...new Set(data?.pizzas?.map((pizza) => pizza.category)),
    ]);
    filterData(data, "Fish");
  }, [data]);
  return (
    <main className="mother-container">
      <div className="landing-page-container">
        <div className="landing-container">
          <div className="land-header">
            <div>
              <div className="paparika-container">
                <img src={paparika} alt="paparika" className="paparika" />
                <img src={tomatoe} alt="tomatoe" className="tomatoe" />
              </div>

              <h1 className="main-header">
                <span>D</span>elicious!
              </h1>
              <h4 className="pizza-word">Pizza</h4>
            </div>
            <p className="pizza-yari">
              At our pizza house, we're dedicated to crafting delicious
              memories, one slice at a time. Your satisfaction is our priority,
              and we're committed to delivering the best pizza experience you've
              ever had
            </p>
            <div className="coca-container">
              <img src={greener} alt="coca" className="greener" />
              <img src={coca} alt="coca" className="coca" />
              <Link to={"/menu"}>
                <button className="discover">Discover for your self</button>
              </Link>
            </div>
          </div>
          <div className="pizza-container">
            <img src={pizzaHandle} alt="" className="pizza-handle" />
            <img src={semi} alt="pizza" className="semi-circle" />
            <img src={layered} alt="slicer" className="layered" />
            <img src={blue2} alt="grey" className="bluer" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
