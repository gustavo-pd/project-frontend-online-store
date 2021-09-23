import React from 'react';

export default class Checkout extends React.Component {
  render() {
    return (
      <form action="">
        <input type="text" data-testid="checkout-fullname" />
        <input type="text" data-testid="checkout-email" />
        <input type="text" data-testid="checkout-cpf" />
        <input type="text" data-testid="checkout-phone" />
        <input type="text" data-testid="checkout-cep" />
        <input type="text" data-testid="checkout-address" />
        <button type="button">Finalizar a Compra</button>
      </form>
    );
  }
}
