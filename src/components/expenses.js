import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchAPIThunk } from '../actions';

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      coin: 'USD',
      method: '',
      category: '',
      description: '',
    };
  }

  componentDidMount = async () => {
    this.getCurrency();
  }

  getCurrency = async () => {
    const { fetchCurrencies } = this.props;
    await fetchCurrencies();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, coin, method, category, description } = this.state;
    const { currencies } = this.props;
    return (
      <section>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            name="value"
            value={ value }
            id="value"
            onChange={ this.handleChange }
            data-testid="value-input"
          />
        </label>

        <label htmlFor="coin">
          Moeda:
          <select
            name="coin"
            value={ coin }
            id="coin"
            onChange={ this.handleChange }
            data-testid="currency-input"
            label="Moeda"
          >
            {
              currencies.map((item, index) => (
                <option key={ index } value={ item }>{item}</option>
              ))
            }
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento:
          <select
            name="method"
            value={ method }
            id="method"
            onChange={ this.handleChange }
            data-testid="method-input"
          >
            <option>Escolha a forma de pagamento</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          Categoria:
          <select
            name="category"
            value={ category }
            id="category"
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            <option>Escolha o tipo de despesa</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            value={ description }
            id="description"
            onChange={ this.handleChange }
            data-testid="description-input"
          />
        </label>
        <button type="button">Adicionar despesa</button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchAPIThunk()),
});

Expenses.propTypes = {
  currencies: propTypes.string,
  fetchCurrencies: propTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
