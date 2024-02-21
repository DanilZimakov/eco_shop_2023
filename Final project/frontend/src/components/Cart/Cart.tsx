import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addItem,
  clearCart as clearCartAction,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/Slice/cartSlice/cartSlice";

import axios from "axios";
import { CartItemType } from "../../types/cart/cartItemType";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import {
  CLOSE_MODAL,
  OPEN_MODAL,
} from "../../redux/Slice/modalSlice/modalSlice";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const isModalOpen = useSelector((state: RootState) => state.modal.modal);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageClick = (categoryId: number, postId: number) => {
    navigate(`/categories/${categoryId}/posts/${postId}`);
  };
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/cart/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(clearCartAction());
        response.data.forEach((item: CartItemType) => {
          dispatch(addItem(item));
        });

        console.log("fetchCartItems", response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
  }, [dispatch]);

  const handleRemoveItem = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3000/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(removeItem(id));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handleClearCart = () => {
    dispatch(clearCartAction());
  };
  const hendleIncQuantity = async (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const newQuantity = item.quantity + 1;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.put(
          `http://localhost:3000/cart/${id}`,
          { quantity: newQuantity },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const updatedItem = response.data;
        dispatch(increaseQuantity({ id, quantity: updatedItem.quantity }));
      } catch (error) {
        console.error("Error updating item quantity:", error);
      }
    }
  };

  const handleDecQuantity = async (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.put(
          `http://localhost:3000/cart/${id}`,
          { quantity: newQuantity },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const updatedItem = response.data;
        dispatch(decreaseQuantity({ id, quantity: updatedItem.quantity }));
      } catch (error) {
        console.error("Error updating item quantity:", error);
      }
    }
  };

  const handleOpenModal = () => {
    dispatch(OPEN_MODAL());
  };

  const handleCloseModal = () => {
    dispatch(CLOSE_MODAL());
  };
  return (
    <>
      <div className="q">
        <div className="container">
          <div className="cart">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.post.id} className="cart-item">
                  <img
                    src={item.post.image}
                    alt={item.post.name}
                    onClick={() =>
                      handleImageClick(item.post.category_id, item.post.id)
                    }
                  />
                  <h3>{item.post.name}</h3>
                  <p>{item.post.price}</p>
                  <div className="quantity">
                    <button
                      className="plus"
                      onClick={() => handleDecQuantity(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="minus"
                      onClick={() => hendleIncQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <p className="result">₽{item.post.price * item.quantity}</p>
                  <button
                    className="delete"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Удалить
                  </button>
                </div>
              ))
            ) : (
              <div>Cart is empty</div>
            )}
            <div className="total">Общая сумма: ₽{totalPrice}</div>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>

          <button className="buy" onClick={handleOpenModal}>
            Купить
          </button>

          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <form>
                  <label htmlFor="cardNumber">Card Number</label>
                  <input type="text" id="cardNumber" name="cardNumber" />
                  <input type="text" id="cardNumber" name="cardNumber" />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
