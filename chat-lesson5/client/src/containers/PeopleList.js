import React, { Component } from 'react';
import { connect } from 'react-redux';


class PeopleList extends Component {
  render() {
    console.log(this.props);
    const { people } = this.props;
    return (
      <div class="people-list" id="people-list">
        <div class="search">
          <input type="text" placeholder="search" />
          <i class="fa fa-search"></i>
        </div>
        <ul class="list">
        {people.map((user, index) => {
          const id = ++index > 9 ? index : `0${index}`;
          return (
            <li class="clearfix" key={user}>
              <img src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_${id}.jpg`} alt="avatar" />
              <div class="about">
                <div class="name">{user}</div>
                <div class="status">
                  <i class="fa fa-circle online"></i> online
                </div>
              </div>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.peopleReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
