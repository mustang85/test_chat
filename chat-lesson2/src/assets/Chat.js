import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Messages from './Messages';
import Users from './Users';
import { addNewUser, newMessage } from './actions';

import './styles/style.scss';

class Chat extends Component {
  render() {
    return (
      <main className="main-wrapper">
        <Messages messages={this.props.messages} newMessage={this.props.newMessage} />
        <Users users={this.props.users} addNewUser={this.props.addNewUser} />
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer,
    messages: state.messagesReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: bindActionCreators(addNewUser, dispatch),
    newMessage: bindActionCreators(newMessage, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
