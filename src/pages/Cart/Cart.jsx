import { useContext } from "react";
import { storeContext } from "../../context/StoreContext";
import "./cart.css";
import { assets, food_list } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, addToCart, removeFromCart, totalAmount } =
    useContext(storeContext);

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cartItems">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <br />
        <hr />
        {food_list.map((v, i) => {
          if (cartItems[v._id] > 0) {
            return (
              <>
                <div key={i} className="cart-items-title cart-items-item">
                  <img src={v.image} alt="" />
                  <p>{v.name}</p>
                  <p>$ {v.price} </p>
                  <p>{cartItems[v._id]} </p>
                  <p>$ {v.price * cartItems[v._id]}</p>
                  <p
                    onClick={() => {
                      addToCart(v._id);
                    }}
                    className="add"
                  >
                    <img src={assets.add_icon_green} alt="" />
                  </p>
                  <p
                    onClick={() => {
                      removeFromCart(v._id);
                    }}
                    className="cross"
                  >
                    <img src={assets.remove_icon_red} alt="" />
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p> $ {totalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p> $ {totalAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>$ {totalAmount() === 0 ? 0 : totalAmount() + 2}</b>
            </div>
            <button
              onClick={() => {
                navigate("/order");
              }}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
