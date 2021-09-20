import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { categoria, onClick } = this.props;
    return (
      <div data-testid="category" className="item">
        <button
          type="button"
          onClick={ () => onClick(categoria.id) }
        >
          { categoria.name }
        </button>
      </div>
    );
  }
}

Categories.propTypes = {
  categoria: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
