import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ranking extends Component {
    goHome = () => {
      const { history: { push } } = this.props;
      push('/');
    }

    render() {
      return (
        <div data-testid=" btn-ranking">
          <h1 data-testid="ranking-title">Ranking</h1>
          <button
            type="button"
            data-testid="btn-go-home"
            onClick={ this.goHome }
          >
            Inicio
          </button>
        </div>
      );
    }
}
Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default Ranking;
