import React from 'react';

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message" className="default-text">
        Seu carrinho está vazio
      </div>
    );
  }
}
