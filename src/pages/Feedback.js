import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  playAgainBtn = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <>
        <Header />
        <div data-testid="feedback-text"><h1>Feedback</h1></div>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.playAgainBtn }
        >
          Play Again

        </button>
      </>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Feedback;
