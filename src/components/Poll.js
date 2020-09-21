import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/questions";

class Poll extends Component {
  handleAnswerOne = (e) =>{
    e.preventDefault()
    const { dispatch, pollId, loggedInUser } = this.props;

    dispatch(
      handleSaveAnswer(
        pollId,
        'optionOne',
        loggedInUser
      )
    );
  }

  handleAnswerTwo = (e) =>{
    e.preventDefault()
    const { dispatch, pollId, loggedInUser } = this.props;

    dispatch(
      handleSaveAnswer(
        pollId,
        'optionTwo',
        loggedInUser
      )
    );
  }

  render() {
    const { question, authorName } = this.props;
    return (
      <div className="poll">
        <h1 className="author">{authorName} asked:</h1>
        <h2>Would you rather..</h2>
        <ul className="poll-options">
          <li className="poll-option" onClick={this.handleAnswerOne}>
            {question.optionOne.text}?
          </li>
          <span>Or...</span>
          <li className="poll-option" onClick={this.handleAnswerTwo}>
            {question.optionTwo.text}?
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, loggedInUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const authorName = users[question.author].name;
  return {
    pollId: id,
    question,
    authorName,
    loggedInUser,
  };
}

export default connect(mapStateToProps)(Poll);
