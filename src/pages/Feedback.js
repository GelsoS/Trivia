import React, { Component } from 'react';

class Feedback extends Component {
  // componentDidMount = () => {
  //   const { gravatarAPI } = this.props;
  //   gravatarAPI();
  // }

  render() {
    return (
      <div data-testid="feedback-text"><h1>Feedback</h1></div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   name: state.loginReducer.name,
//   email: state.loginReducer.email,
// });

export default Feedback;
