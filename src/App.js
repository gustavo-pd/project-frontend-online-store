import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/">
            <Header />
            <MainPage />
          </Route>
          <Route path="/shoppingcart">
            <Header />
            <ShoppingCart />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
