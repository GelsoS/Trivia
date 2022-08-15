import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { MD5 } from 'crypto-js';
import '../styles/header.css';

class Header extends Component {
  render() {
    const { name, email, score } = this.props;
    return (
      <header className="div">

        <img
          data-testid="header-profile-picture"
          src={ `https://www.gravatar.com/avatar/${MD5(email).toString()}` }
          alt="imagem do jogador"
        />

        <p data-testid="header-player-name">
          Nome do jogador:
          {' '}
          { name }
        </p>
        <p data-testid="header-player-name">
          E-mail:
          {' '}
          { email }
        </p>

        Score:
        <p data-testid="header-score">
          { score }
        </p>

      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.loginReducer.name,
  email: state.loginReducer.email,
  score: state.player.score,
});

Header.propTypes = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
