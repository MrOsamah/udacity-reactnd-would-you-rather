import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

class PollPreview extends Component {
  render() {
    const { question, pollId } = this.props;
    return (
      <div>
        <div className="poll-preview">
          <h4>Whould you rather..</h4>
          <p>
            {question.optionOne.text.length > 20
              ? question.optionOne.text.substring(0, 20) + "..."
              : question.optionOne.text}
          </p>
          <p>
            {question.optionTwo.text.length > 20
              ? question.optionTwo.text.substring(0, 20) + "..."
              : question.optionTwo.text}
          </p>
          <Link to={`/questions/${pollId}`}>Go to Poll</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions }, { pollId }) {
  return {
    question: questions[pollId],
    pollId
  };
}

export default connect(mapStateToProps)(PollPreview);
