import React from "react";
import ProductItem from "./ProductItem";
import Cart from "./Cart";
import Checkout from "./Checkout";

const ProductList = props => {
  const renderList = props.products.map(product => {
    return (
      <ProductItem
        product={product}
        key={product.id}
        onAddToCart={props.onAddToCart}
        // onInputChange={props.onInputChange}
      />
    );
  });

  return (
    <div>
      <div className="ui stackable grid">
        <div className="three column row">{renderList}</div>
        <div className="row">
          <Cart
            cart={props.cart}
            onCheckout={props.onCheckout}
            onClearCart={props.onClearCart}
          />
          {props.showCheckout === true ? (
            <Checkout onSubmit={props.onSubmit} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
