import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  constructor() {
    super();
    this.rankingClick = this.rankingClick.bind(this);
  }

  playAgainBtn = () => {
    const { history } = this.props;
    history.push('/');
  }

  rankingClick() {
    const { history: { push } } = this.props;
    push('/ranking');
  }

  render() {
    return (
      <div data-testid="feedback-text">
        <Header />
        <div data-testid="feedback-text"><h1>Feedback</h1></div>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.playAgainBtn }
        >
          Play Again

        </button>
        <button
          data-testid="btn-ranking"
          type="button"
          onClick={ this.rankingClick }
        >
          Ranking
        </button>
      </div>

    );
  }
}

Feedback.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Feedback;
