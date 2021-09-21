import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class FavoritList extends Component {
  handleClick = (product) => {
    const { onClick } = this.props;
    onClick(product);
  }

  render() {
    // Ajudado pelo Jean Marcel
    const { product } = this.props;
    const { title, thumbnail, price, id, attributes } = product;
    return (
      <div>
        <Link
          to={ { pathname: `/details/${id}`,
            state: { title, thumbnail, price, id, attributes } } }
          data-testid="product-detail-link"
        >
          <section data-testid="product">
            <p data-testid="shopping-cart-product-name">{ title }</p>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
          </section>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.handleClick(product) }
        >
          Remove Card
        </button>
        <div data-testid="shopping-cart-product-quantity">1</div>
      </div>
    );
  }
}

FavoritList.propTypes = {
  product: PropTypes.shape([]),
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  attributes: PropTypes.shape([]),
}.isRequired;
