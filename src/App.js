import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={ MainPage } />
          <Route path="/shoppingcart" component={ ShoppingCart } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
