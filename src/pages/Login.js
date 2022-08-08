import React from 'react';
// import PropTypes from 'prop-types';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { tokenThunk } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.validarBtn = this.validarBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      validad: true,
      nome: '',
      email: '',
    };
  }

  handleClick = async () => {
    const { loginDispatch, history } = this.props;
    await loginDispatch();
    history.push('/game');
  }

  validarBtn() {
    const { nome, email } = this.state;
    const cinco = 5;
    const verifyEmail = (/\S+@\S+\.\S+/).test(email);
    if (nome.length > cinco && verifyEmail) {
      this.setState({
        validad: false,
      });
    } else {
      this.setState({
        validad: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validarBtn);
  }

  render() {
    const { validad, email, nome } = this.state;
    const { history } = this.props;

    return (
      <form>
        <label htmlFor="nome">
          <input
            value={ nome }
            name="nome"
            type="text"
            onChange={ this.handleChange }
            data-testid="input-player-name"
          />
        </label>

        <label htmlFor="email">
          <input
            value={ email }
            name="email"
            type="email"
            onChange={ this.handleChange }
            data-testid="input-gravatar-email"
          />
        </label>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ validad }
          onClick={ this.handleClick }
        >
          Play
        </button>
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ () => history.push('/settings') }
        >
          Settings
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  loginDispatch: func,
  history: shape({
    push: func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: () => dispatch(tokenThunk()),
});

export default connect(null, mapDispatchToProps)(Login);
