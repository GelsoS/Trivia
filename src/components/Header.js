import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { MD5 } from 'crypto-js';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
  }

  // componentDidMount = () => {
  //   const { gravatarAPI } = this.props;
  //   gravatarAPI();
  // }

  render() {
    const { score } = this.state;
    const { name, email } = this.props;
    return (
      <header>
        <div>
          <img
            data-testid="header-profile-picture"
            src={ `https://www.gravatar.com/avatar/${MD5(email).toString()}` }
            alt="imagem do jogador"
          />
        </div>
        <div>
          Nome do jogador
          <p data-testid="header-player-name">{ name }</p>
          <p data-testid="header-player-name">{ email }</p>
        </div>
        <div>
          Score:
          <p data-testid="header-score">{ score }</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.loginReducer.name,
  email: state.loginReducer.email,
});

Header.propTypes = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
