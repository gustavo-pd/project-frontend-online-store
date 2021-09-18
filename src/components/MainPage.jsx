import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class MainPage extends React.Component {
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
    const { query } = this.state;
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
        <Link
          to="./shoppingcart"
          data-testid="shopping-cart-button"
        >
          Cart Icon
        </Link>
      </div>
    );
  }
}
