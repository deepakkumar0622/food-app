import { useContext } from "react";
import "./placeorder.css";
import { storeContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { totalAmount } = useContext(storeContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="mulitfields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="mulitfields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="mulitfields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right">
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
              <p> $ {2}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>$ {totalAmount() + 2}</b>
            </div>
            <button>Proceed to payment</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
