import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NoFound from './components/NoFound/NoFound';
//import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {
  return (
    <div>
     <Header></Header>
    
     <Router>
       <Switch>
        <Route path="/shop">
        <Shop></Shop>
        </Route>
        <Route path="/review">
          <Review></Review>
          </Route>
        <Route path="/inventory">
          <Inventory>

          </Inventory>

        </Route>
        <Route exact path="/">
        <Shop></Shop>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetail></ProductDetail>
        </Route>
        <Route path="*">
          <NoFound>

          </NoFound>

        </Route>
       </Switch>

     </Router>
     
    </div>
  );
}

export default App;
