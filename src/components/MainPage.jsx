import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories , getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriaId: '',
      query: '',
      categoriaList: [],
    };
  }

  componentDidMount = async () => {
    const { categoriaId, query } = this.state;
    const fetchAPi = await getCategories();
    const fetchItem = await getProductsFromCategoryAndQuery(query, categoriaId);
    this.categoriesList(fetchAPi);
  }



  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  }

  categoriesList(fetchAPi) {
    this.setState({ categoriaList: fetchAPi });
  }

  render() {
    const { query, categoriaList } = this.state;
    return (
      <div className="container pg-inicial">
        <div className="ui vertical text menu">
          <div className="header item">Categorias</div>
          { (categoriaList !== []) && categoriaList.map((categoria) => (
            <Categories key={ categoria.id } categoria={ categoria } />
          ))}
        </div>
        <div className="content">
          <section className="searchbar">
            <div className="ui icon input search-input">
              <i className="search left icon" />
              <input
                type="text"
                id="query"
                value={ query }
                onChange={ this.handleChange }
              />
            </div>
            <Link
              to="./shoppingcart"
              data-testid="shopping-cart-button"
            >
              <i className="shopping cart big icon" />
            </Link>
          </section>
          { query === '' && (
            <div data-testid="home-initial-message" className="default-text">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </div>
          )}
        </div>
      </div>
    );
  }
}
