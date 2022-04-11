import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, totalExpenses } = this.props;
    return (
      <section>
        <div>
          <h1>TrybeWallet</h1>
        </div>
        <div>
          <h3 data-testid="email-field">{`Email: ${userEmail}`}</h3>
        </div>
        <div>
          <h3 data-testid="total-field">
            { totalExpenses.reduce((prev, curr) => (
              prev + curr.value * curr.exchangeRates[curr.currency].ask), 0).toFixed(2) }
          </h3>
        </div>
        <div>
          <h3 data-testid="header-currency-field">BRL</h3>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalExpenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: propTypes.string,
  totalExpenses: propTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Header);
