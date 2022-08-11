import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  constructor() {
    super();
    this.rankingClick = this.rankingClick.bind(this);
  }
  // componentDidMount = () => {
  //   const { gravatarAPI } = this.props;
  //   gravatarAPI();
  // }

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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

// const mapStateToProps = (state) => ({
//   name: state.loginReducer.name,
//   email: state.loginReducer.email,
// });
export default Feedback;
