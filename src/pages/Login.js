import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.validarBtn = this.validarBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      validad: true,
      name: '',
      email: '',
    };
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
    return (
      <form>
        <label htmlFor="nome">
          <input
            value={ name }
            name="nome"
            type="text"
            data-testid="input-player-name"
            onChange={ this.handleChange }
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
        >
          Play
        </button>

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchPlayerInfo: (playload) => dispatch(userInfoAction(playload)),
});
export default connect(null, mapDispatchToProps)(Login);
