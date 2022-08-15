import React from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { tokenThunk, playerAction, playerEmailAction } from '../redux/actions';
import '../styles/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      validad: true,
    };

    this.validarBtn = this.validarBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = async () => {
    const { name, email } = this.state;
    const { loginDispatch, playerDispatch, playerEmailDispatch, history } = this.props;
    await loginDispatch();
    playerDispatch(name);
    playerEmailDispatch(email);
    history.push('/game');
  }

  validarBtn() {
    const { name, email } = this.state;
    const cinco = 5;
    const verifyEmail = (/\S+@\S+\.\S+/).test(email);
    if (name.length > cinco && verifyEmail) {
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
    const { validad, email, name } = this.state;
    const { history } = this.props;

    return (
      <form className="form">
        <label htmlFor="name">
          <input
            className="input"
            value={ name }
            name="name"
            type="text"
            placeholder="digite seu nome"
            onChange={ this.handleChange }
            data-testid="input-player-name"
          />
        </label>

        <label htmlFor="email">
          <input
            className="input"
            value={ email }
            name="email"
            type="email"
            placeholder="digite seu email"
            onChange={ this.handleChange }
            data-testid="input-gravatar-email"
          />
        </label>
        <button
          className="button"
          type="button"
          data-testid="btn-play"
          disabled={ validad }
          onClick={ this.handleClick }
        >
          Play
        </button>
        <button
          className="button"
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
  playerDispatch: (payload) => dispatch(playerAction(payload)),
  playerEmailDispatch: (payload) => dispatch(playerEmailAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
