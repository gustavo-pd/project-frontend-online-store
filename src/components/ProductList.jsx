import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  componentDidMount = () => {
    const lista = localStorage.getItem('shoppingCartList');
    if (!lista) localStorage.setItem('shoppingCartList', JSON.stringify([]));
  }

  addToCart = async (product) => {
    const lista = await JSON.parse(localStorage.getItem('shoppingCartList'));
    const listaAtt = [...lista, product];
    localStorage.setItem('shoppingCartList', JSON.stringify(listaAtt));
    console.log(localStorage.getItem('shoppingCartList'));
  };

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
            <p>{ title }</p>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
          </section>
        </Link>
        <button
          type="button"
          onClick={ () => this.addToCart(product) }
          data-testid="product-add-to-cart"
        >
          Add to Cart
        </button>
      </div>
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
