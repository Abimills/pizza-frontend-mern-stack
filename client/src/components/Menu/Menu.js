import axios from "axios";
import React, { useEffect, useState } from "react";
import PizzaCard from "../PizzaCard/PizzaCard";
import config from "../../config";

const Menu = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Fish");
  const [filteredData, setFilteredData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`${config.URL_BASE}`);

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
    setCategory([
      "All",
      ...new Set(data?.pizzas?.map((pizza) => pizza.category)),
    ]);
    filterData(data, "Fish");
  }, [data]);
  return (
    <div className="all-pizza-container">
      <h1 className="choose-header">Our Menu</h1>
      <div className="filter-pizza">
        {category?.map((category, index) => {
          return (
            <button
              className={
                activeCategory == category
                  ? "choose-btn active-cat-btn"
                  : "choose-btn"
              }
              key={index}
              onClick={() => filterData(data, category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="pizza-card-container">
        {filteredData?.map((pizza) => {
          return <PizzaCard pizza={pizza} key={pizza._id} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
