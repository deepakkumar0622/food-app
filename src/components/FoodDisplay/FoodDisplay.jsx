/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./fooddisplay.css";
import { storeContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ catagory }) => {
  const { food_list } = useContext(storeContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((v, i) => {
          if (catagory === "All" || catagory === v.category) {
            return (
              <FoodItem
                key={i}
                id={v._id}
                name={v.name}
                desc={v.description}
                image={v.image}
                price={v.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
