import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories/* , getProductsFromCategoryAndQuery  */ } from '../services/api';
import Categories from './Categories';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      // categoriaId: '',
      query: '',
      categoriaList: [],
    };
  }

  componentDidMount = async () => {
    // const { categoriaId, query } = this.state;
    const fetchAPi = await getCategories();
    // const fetchItem = await getProductsFromCategoryAndQuery(query, categoriaId);
    this.categoriesList(fetchAPi);
  }

  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  }

  categoriesList(fetchAPi) {
    console.log(fetchAPi);
    this.setState({ categoriaList: fetchAPi });
  }

  render() {
    const { query, categoriaList } = this.state;
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
        { (categoriaList !== []) && categoriaList.map((categoria) => (
          <Categories key={ categoria.id } categoria={ categoria } />
        ))}
      </div>
    );
  }
}
