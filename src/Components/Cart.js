import React from "react";
import "./Cart.css";

const Cart = props => {
  const cartSummary = props.cart.map(product => {
    return (
      <li key={product.id * Math.random()}>
        {product.name}, <span>$ {product.price}</span>
      </li>
    );
  });

  const priceTotal = props.cart.reduce((prev, cur) => prev + cur.price, 0);
  console.log(props);
  return (
    <div className="five wide column">
      <div className="ui card cart-container">
        <div className="content">
          <div className="header">
            Cart
            <i className="fas fa-shopping-cart" />
          </div>
          <div className="description">
            <hr></hr>
            <h4 style={{ marginTop: "10px", marginBottom: "10px" }}>
              Cart Summary
            </h4>
            <ul>{cartSummary}</ul>
          </div>
          <div className="description">
            <p>Items: {props.cart.length}</p>
            <p>Total: $ {priceTotal.toFixed(2)}</p>
          </div>
        </div>
        <div className="extra content">
          <div className="button-wrapper">
            <button
              className="ui button green cart-buttons"
              onClick={props.onCheckout}
            >
              Checkout
            </button>
            <button
              type="button"
              className="ui button red cart-buttons"
              onClick={props.onClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
