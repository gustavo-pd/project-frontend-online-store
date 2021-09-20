import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class ProductList extends Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <section data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </section>
    );
  }
}
