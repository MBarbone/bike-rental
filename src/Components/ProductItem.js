import React from "react";
import "./ProductItem.css";

const ProductItem = props => {
  return (
    <div className="column">
      <div className="product-item">
        <div className="ui card">
          <div className="image">
            <img src={props.product.image} alt={props.product.name} />
          </div>
          <div className="content">
            <div className="header">{props.product.name}</div>
            <div className="description">
              <p>Type: {props.product.product_type}</p>
              <p>$ {props.product.price}</p>

              {/* <div className="ui input">
                <input
                  type="number"
                  value={props.productQuantity}
                  onChange={props.onInputChange}
                  placeholder="Quantity"
                  required
                />
              </div> */}
            </div>
          </div>
          <div className="extra content">
            <button
              className="ui fluid button"
              onClick={() => props.onAddToCart(props.product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
