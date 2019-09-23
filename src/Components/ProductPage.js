import React from "react";
import ProductList from "./ProductList";
import data from "../data/index.json";

class ProductPage extends React.Component {
  state = {
    products: data.products,
    cart: [],
    productQuantity: "",
    selectedProduct: null,
    showCheckout: false
  };

  // onInputChange = event => {
  //   const value = event.target.value.replace(/\+|-/gi, "");

  //   this.setState({ productQuantity: value });
  //   console.log(this.state);
  // };

  onAddToCart = product => {
    this.setState({
      cart: [...this.state.cart, product],
      selectedProduct: product.name
    });

    setTimeout(() => {
      alert(`${this.state.selectedProduct} added to cart.`);
    }, 50);
  };

  onCheckout = () => {
    if (this.state.cart.length === 0) {
      alert("Cart is empty");
      this.setState({
        showCheckout: false
      });

      var checkout = document.getElementById("content");
      checkout.scrollIntoView();
    }

    if (this.state.cart.find(product => product.product_type === "bike")) {
      this.setState({
        showCheckout: true
      });
    } else {
      this.setState({
        showCheckout: false
      });
      alert(
        "You must have at least one bicycle in the cart to add an add on product."
      );
    }
  };

  onClearCart = () => {
    this.setState({
      cart: [],
      showCheckout: false
    });
  };

  onSubmit = e => {
    e.preventDefault();
    alert("Thank you for your order!");
    setTimeout(() => {
      this.props.history.push("/");
    }, 1000);

    this.setState = {
      products: data.products,
      cart: [],
      productQuantity: "",
      selectedProduct: null,
      showCheckout: false
    };
  };

  render() {
    return (
      <div className="ui container">
        <h1>Available for Rent</h1>
        <ProductList
          products={this.state.products}
          onAddToCart={this.onAddToCart}
          cart={this.state.cart}
          onCheckout={this.onCheckout}
          onClearCart={this.onClearCart}
          showCheckout={this.state.showCheckout}
          onSubmit={this.onSubmit}
          // onInputChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default ProductPage;
