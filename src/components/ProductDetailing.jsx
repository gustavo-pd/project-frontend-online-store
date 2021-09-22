import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';

export default class ProductDetailing extends Component {
  componentDidMount = () => {
    const lista = localStorage.getItem('shoppingCartList');
    if (!lista) localStorage.setItem('shoppingCartList', JSON.stringify([]));
  }

  addToCart = (product) => {
    const lista = JSON.parse(localStorage.getItem('shoppingCartList'));
    const listaAtt = [...lista, product];
    localStorage.setItem('shoppingCartList', JSON.stringify(listaAtt));
  };

  render() {
    const { location: { state } } = this.props;
    const { title, thumbnail, price, attributes, id } = state;
    return (
      <section data-testid="product-detail-name">
        <Header />
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          <i className="shopping cart big icon" />
        </Link>
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
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addToCart({ title, thumbnail, price, attributes, id }) }
        >
          Add to Cart
        </button>
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
