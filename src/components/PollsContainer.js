import React, { Component } from "react";
import PollPreview from "./PollPreview";

class PollsContainer extends Component {
  render() {
    const pollsIds = this.props.polls;
    return (
      <div>
        <ul>{pollsIds.map((pollId) => (
            <li key={pollId}>
                <PollPreview pollId={pollId}/>
            </li>
        ))}</ul>
      </div>
    );
  }
}

export default PollsContainer;
