/* eslint-disable react/prop-types */
import { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./fooditem.css";
import { storeContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, desc, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(storeContext);
  return (
    <div className="fooditem">
      <div className="fooditem-img">
        <img className="image" src={image} alt="" />

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-desc">{desc}</p>
        <p className="food-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
