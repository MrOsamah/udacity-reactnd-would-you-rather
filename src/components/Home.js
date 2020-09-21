import React, {Component} from 'react'
import {connect} from 'react-redux'
import PollsContainer from './PollsContainer'

class Home extends Component {
    render(){
        return(
            <div>
                <div className='poll-container'>
                    <h2>Unanswered Polls</h2>
                    <PollsContainer polls={this.props.unAnsweredQuestionsIds}/>
                </div>
                <div className='poll-container'>
                    <h2>Answered Polls</h2>
                    <PollsContainer polls={this.props.answeredQuestionsIds}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps({loggedInUser, users, questions}){
    const unAnsweredQuestionsIds = Object.keys(questions).filter(
        (q) => (!users[loggedInUser].answers.hasOwnProperty(q))
    )
    const answeredQuestionsIds = Object.keys(questions).filter(
        (q) => (users[loggedInUser].answers.hasOwnProperty(q))
    )
    return {
        unAnsweredQuestionsIds,
        answeredQuestionsIds,
        users,
        loggedInUser
    }
}

export default connect(mapStateToProps)(Home)