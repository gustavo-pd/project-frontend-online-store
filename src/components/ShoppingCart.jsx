import React from 'react';
import PropTypes from 'prop-types';
import FavoritList from './FavoritList';

export default class ShoppingCart extends React.Component {
  handleNothing = () => {
    console.log('No futuro nos vemos!');
  }

  render() {
    const { location: { state: { favoritList } } } = this.props;
    console.log(favoritList);
    return (
      <div data-testid="shopping-cart-empty-message" className="default-text">
        { (favoritList.length < 1) ? <span>Seu carrinho está vazio</span>
          : favoritList.map((item) => (
            <FavoritList
              key={ item.id }
              product={ item }
              onClick={ this.handleNothing }
            />
          ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  favoritList: PropTypes.arrayOf(
    PropTypes.shape([]),
  ),
}.isRequired;
