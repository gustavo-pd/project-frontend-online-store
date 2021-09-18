import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { categoria } = this.props;
    return (
      <div data-testid="category" className="item">
        { categoria.name }
      </div>
    );
  }
}

Categories.propTypes = {
  categoria: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
