import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetailing extends Component {
  render() {
    const { location: { state: { title, thumbnail, price, attributes } } } = this.props;
    return (
      <section data-testid="product-detail-name">
        <h1>{ `${title}` }</h1>
        <img src={ thumbnail } alt={ title } />
        <div>
          <h2>Especificações técnicas:</h2>
          <ul>
            { attributes.map((attribute) => (
              <li key={ attribute.id }>
                { `${attribute.name}: ${attribute.value_name}` }
              </li>
            ))}
          </ul>
        </div>
        <p>{ price }</p>
      </section>
    );
  }
}

ProductDetailing.propTypes = {
  location: PropTypes.shape([]),
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  attributes: PropTypes.shape([]),
}.isRequired;
