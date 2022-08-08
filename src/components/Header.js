import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { name, score } = this.props;
    return (
      <header>
        <div data-testid="header-profile-picture" />
        <div>
          Nome do jogador
          <p data-testid="header-player-name">{ name }</p>
        </div>
        <div>
          Score:
          <p data-testid="header-score">{ score }</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
    name: state.player.name
}

Header.propTypes = {
  name: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
};

export default connect(mapStateToProps) (Header);
