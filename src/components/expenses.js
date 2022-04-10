import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Expenses extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <section>
        <label htmlFor="value">
          Valor:
          <input type="number" name="value" id="value" data-testid="value-input" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency" data-testid="currency-input">
            {
              currencies.map((item, index) => (
                <option key={ index } value={ item }>{item}</option>
              ))
            }
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento:
          <select name="method" id="method" data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select name="tag" id="tag" data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            data-testid="description-input"
          />
        </label>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Expenses.propTypes = {
  currencies: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Expenses);
