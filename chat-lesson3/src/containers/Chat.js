import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from 'store';

import PeopleList from './PeopleList';
import MessagesList from './MessagesList';

window.store = store;

export default class Chat extends Component {
  render() {
    return (
      <Provider key={module.hot ? Date.now() : store} store={store}>
        <div class="container clearfix">
          <PeopleList />
          <MessagesList />
        </div>
      </Provider>
    )
  }
}
