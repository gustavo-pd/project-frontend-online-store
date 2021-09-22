import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import ShoppingCart from './components/ShoppingCart';
import ProductDetailing from './components/ProductDetailing';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/">
            <Header />
            <MainPage />
          </Route>
          <Route
            path="/shoppingcart"
            render={ (props) => (
              <div>
                <ShoppingCart { ...props } />
              </div>
            ) }
          />
          <Route exact path="/details/:id" component={ ProductDetailing } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
