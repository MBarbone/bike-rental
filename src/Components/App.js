import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "../Components/layout/Home";
import ProductPage from "../Components/ProductPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/rentals" component={ProductPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
