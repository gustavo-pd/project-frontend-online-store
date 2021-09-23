import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingList from './ShoppingList';

export default class ShoppingCart extends React.Component {
  render() {
    const lista = JSON.parse(localStorage.getItem('shoppingCartList'));
    if (!lista) {
      return (
        <div data-testid="shopping-cart-empty-message" className="default-text">
          Seu carrinho está vazio
        </div>
      );
    }
    return (
      <div>
        {(lista.length < 1) ? (
          <div data-testid="shopping-cart-empty-message" className="default-text">
            Seu carrinho está vazio
          </div>
        ) : lista.map((item) => (
          <ShoppingList
            key={ item.id }
            product={ item }
          />
        ))}
        <Link to="/checkout">
          <button
            type="button"
            data-testid="checkout-products"
          >
            Finalizar a Compra
          </button>
        </Link>
      </div>
    );
  }
}
