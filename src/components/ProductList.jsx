import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  render() {
    const { product: { title, thumbnail, price, id, attributes } } = this.props;
    return (
      <Link
        to={ { pathname: `/details/${id}`,
          state: { title, thumbnail, price, id, attributes } } }
        data-testid="product-detail-link"
      >
        <section data-testid="product">
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </section>
      </Link>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.shape([]),
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  attributes: PropTypes.shape([]),
}.isRequired;
