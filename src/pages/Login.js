import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.loginCheck);
  };

  // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  loginCheck = () => {
    const { email, password } = this.state;
    const validate = this.validateEmail(email);
    const SIX = 6;
    if (password.length >= SIX && validate) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleClick = () => {
    const { user, history } = this.props;
    const { email } = this.state;
    user(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div>
        <h1>Sign In</h1>
        <input
          type="email"
          name="email"
          value={ email }
          placeholder="Email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />

        <input
          type="password"
          name="password"
          value={ password }
          placeholder="Password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />

        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.func,
  history: PropTypes.object,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  user: (state) => dispatch(login(state)),
});

export default connect(null, mapDispatchToProps)(Login);
