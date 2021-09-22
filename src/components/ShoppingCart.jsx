import React from 'react';
import ShoppingList from './ShoppingList';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      lista: [],
    };
  }

  componentDidMount = async () => {
    const lista = await JSON.parse(localStorage.getItem('shoppingCartList'));
    this.addList(lista);
  }

  addList = async (lista) => {
    this.setState({ lista });
  };

  render() {
    const { lista } = this.state;
    return (
      <div>
        { (lista === []) ? (
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

/* ShoppingCart.propTypes = {
  ShoppingList: PropTypes.arrayOf(
    PropTypes.shape([]),
  ),
}.isRequired; */
