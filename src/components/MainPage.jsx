import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import ProductList from './ProductList';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriaId: '',
      query: '',
      categoriaList: [],
      productList: [],
    };
  }

  filterList = (id) => {
    this.setState({ categoriaId: id }, () => this.handleClick());
    console.log(id);
  }

  componentDidMount = async () => {
    const fetchAPi = await getCategories();
    // const fetchItem = await getProductsFromCategoryAndQuery(query, categoriaId);
    this.categoriesList(fetchAPi);
    this.handleClick();
  }

  handleChange = async ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  }

  handleClick = async () => {
    const { categoriaId, query } = this.state;
    const fetchItem = await getProductsFromCategoryAndQuery(query, categoriaId);
    if (fetchItem) this.setState({ productList: fetchItem.results });
  }

  categoriesList(fetchAPi) {
    this.setState({ categoriaList: fetchAPi });
  }

  render() {
    const { query, categoriaList, productList } = this.state;
    const lista = JSON.parse(localStorage.getItem('shoppingCartList'));
    return (
      <div className="container pg-inicial">
        <div className="ui vertical text menu">
          <div className="header item">Categorias</div>
          { (categoriaList !== []) && categoriaList.map((categoria) => (
            <Categories
              key={ categoria.id }
              categoria={ categoria }
              onClick={ this.filterList }
            />
          ))}
        </div>
        <div className="content">
          <section className="searchbar">
            <div className="ui icon input search-input">
              <i className="search left icon" />
              <input
                data-testid="query-input"
                type="text"
                id="query"
                value={ query }
                onChange={ this.handleChange }
              />
              <button
                type="button"
                data-testid="query-button"
                onClick={ this.handleClick }
              >
                Pesquisar
              </button>

            </div>
            <Link
              to="/shoppingcart"
              data-testid="shopping-cart-button"
            >
              <i className="shopping cart big icon" />
              <span data-testid="shopping-cart-size">{ lista && lista.length }</span>
            </Link>
          </section>
          { productList.length < 1 ? (
            <div data-testid="home-initial-message" className="default-text">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </div>
          ) : (
            <div data-testid="home-initial-message" className="default-text">
              { productList.map((product) => (
                <ProductList
                  key={ product.id }
                  product={ product }
                />))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
