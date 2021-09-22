import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class ShoppingList extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  handleClick(param) {
    const { count } = this.state;
    if (param) this.setState({ count: Number(count) + 1 });
    else if (count > 0) this.setState({ count: Number(count) - 1 });
  }

  render() {
    // Ajudado pelo Jean Marcel
    const { product } = this.props;
    const { count } = this.state;
    const { title, thumbnail, price } = product;
    return (
      <section data-testid="product">
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <button
          type="button"
          onClick={ () => this.handleClick() }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">
          { count }
        </p>
        <button
          type="button"
          onClick={ () => this.handleClick(true) }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </section>
    );
  }
}

ShoppingList.propTypes = {
  product: PropTypes.shape([]),
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  attributes: PropTypes.shape([]),
}.isRequired;
