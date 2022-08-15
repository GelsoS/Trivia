import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ranking.css';

class Ranking extends Component {
  constructor() {
    super();
    this.recuperaLocalstorage = this.recuperaLocalstorage.bind(this);
    this.state = {
      ranking: [],
    };
  }

  componentDidMount() {
    this.recuperaLocalstorage();
  }

  goHome = () => {
    const { history: { push } } = this.props;
    push('/');
  }

  recuperaLocalstorage() {
    const arr = JSON.parse(localStorage.getItem('ranking'));
    if (arr !== undefined && arr.length > 0) {
      arr.sort((a, b) => b.score - a.score);
      this.setState({
        ranking: arr,
      });
    } else {
      this.setState({
        ranking: arr,
      });
    }
  }

  render() {
    const { ranking } = this.state;
    return (
      <div data-testid=" btn-ranking" className="ranking">
        <h1 data-testid="ranking-title">Ranking</h1>

        { ranking.map((param, i) => (
          <div key={ i } className="result">
            <img src={ param.gravatar } key={ param.gravatar } alt="gravatar" />
            <h4 data-testid={ `player-name-${i}` }>{param.name}</h4>
            <p data-testid={ `player-score-${i}` }>
              Score:
              {param.score}
            </p>
          </div>
        ))}

        <button
          className="button"
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
