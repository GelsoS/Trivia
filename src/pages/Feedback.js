import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { zerar } from '../redux/actions';
import '../styles/feedback.css';

class Feedback extends Component {
  constructor() {
    super();
    this.rankingClick = this.rankingClick.bind(this);
  }

  playAgainBtn = () => {
    const { history, zeraScore } = this.props;
    zeraScore(0);
    history.push('/');
  }

  rankingClick() {
    const { history: { push }, zeraScore } = this.props;
    zeraScore(0);
    push('/ranking');
  }

  render() {
    const { score, assertions } = this.props;
    return (
      <div data-testid="feedback-text">
        <Header />
        <div data-testid="feedback-text" className="feedback">
          <h1>Feedback</h1>

          Acertos:
          <p data-testid="feedback-total-question">
            {assertions}
          </p>

          Placar Final:
          <p data-testid="feedback-total-score">
            {score}
          </p>

          <p>
            {
              assertions > 2 ? 'Well Done!' : 'Could be better...'
            }
          </p>
          <div>
            <button
              className="button"
              type="button"
              data-testid="btn-play-again"
              onClick={ this.playAgainBtn }
            >
              Play Again

            </button>
            <button
              className="button"
              data-testid="btn-ranking"
              type="button"
              onClick={ this.rankingClick }
            >
              Ranking
            </button>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  zeraScore: (p) => dispatch(zerar(p)),
});

Feedback.propTypes = {
  history: PropTypes.object,
  assertions: PropTypes.number,
  score: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
