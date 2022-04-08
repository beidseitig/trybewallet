import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <section>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">{`Email: ${user.email}`}</p>
        <p data-testid="total-field">{`Despesa Total: ${0}`}</p>
        <p data-testid="header-currency-field">BRL</p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Header.propTypes = {
  user: propTypes.shape({
    email: propTypes.string,
  }),
}.isRequired;

export default connect(mapStateToProps)(Header);
