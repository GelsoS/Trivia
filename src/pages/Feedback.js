import React, { Component } from 'react';
import Header from '../components/Header';

class Feedback extends Component {
  // componentDidMount = () => {
  //   const { gravatarAPI } = this.props;
  //   gravatarAPI();
  // }

  render() {
    return (
      <>
        <Header />
        <div data-testid="feedback-text"><h1>Feedback</h1></div>
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
//   name: state.loginReducer.name,
//   email: state.loginReducer.email,
// });

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
//   email: state.loginReducer.email,
//   score: state.player.score,
});

Feedback.propTypes = {
  assertions: propTypes.number.isRequired,
//   email: propTypes.string.isRequired,
//   score: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
