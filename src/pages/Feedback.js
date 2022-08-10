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

export default Feedback;
