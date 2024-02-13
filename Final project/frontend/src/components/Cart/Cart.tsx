import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, clearCart } from "../../redux/Slice/cartSlice/cartSlice";
import axios from "axios";
import { RootState } from "../../redux/store";

const Cart: React.FunctionComponent = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/cart")
      .then((response) => {
        dispatch(addItem(response.data));
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  return (
    <>
      <div className="cart">
        <div className="modal-background" />
        <div className="modal-content">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id}>
                {item.name} - {item.price}
              </div>
            ))
          ) : (
            <div>Cart is empty</div>
          )}
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => dispatch(clearCart())}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
