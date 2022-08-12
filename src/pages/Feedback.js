import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { score, assertions } = this.props;
    return (
      <div data-testid="feedback-text">
        <Header />
        <div data-testid="feedback-text"><h1>Feedback</h1></div>
        <div>
          Acertos:
          <p data-testid="feedback-total-question">{assertions}</p>
        </div>
        <div>
          Placar Final:
          <p data-testid="feedback-total-score">{score}</p>
        </div>
        <p>
          {
            assertions > 2 ? 'Well Done!' : 'Could be better...'
          }
        </p>
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

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

Feedback.propTypes = {
  history: PropTypes.object,
  assertions: PropTypes.number,
  score: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
