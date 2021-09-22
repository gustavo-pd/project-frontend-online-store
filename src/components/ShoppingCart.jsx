import React from 'react';
import ShoppingList from './ShoppingList';

export default class ShoppingCart extends React.Component {
  render() {
    const lista = JSON.parse(localStorage.getItem('shoppingCartList'));
    console.log(localStorage.getItem('shoppingCartList'));
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
      </div>
    );
  }
}
