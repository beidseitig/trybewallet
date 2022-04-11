import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Saved extends Component {
  render() {
    const { savedExpenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { savedExpenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ (+expense.value).toFixed(2) }</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>{ (+expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
              <td>
                { (expense.exchangeRates[expense.currency].ask * expense.value)
                  .toFixed(2) }
              </td>
              <td>Real</td>
              <td>
                <button type="button">Editar</button>

                <button type="button">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  savedExpenses: state.wallet.expenses,
});

Saved.propTypes = {
  savedExpenses: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps)(Saved);
