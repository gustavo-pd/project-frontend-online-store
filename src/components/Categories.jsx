import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriaId: '',
      query: '',
    };
  }

  componentDidMount = async () => {
    const { categoriaId, query } = this.state;
    const fetchAPi = await getCategories();
    const fetchItem = await getProductsFromCategoryAndQuery(query, categoriaId);
    console.log(fetchAPi);
    console.log(fetchItem);
  }

  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  }

  render() {
    const { categoriaId, query } = this.state;
    return (
      <div>
        <label htmlFor="searchBar">
          <input
            type="text"
            id="query"
            value={ query }
            onChange={ this.handleChange }
          />
        </label>
        { query === '' && (
          <div data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </div>
        )}
      </div>
    );
  }
}
