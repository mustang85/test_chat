import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from 'store';

import ChatWrap from './ChatWrap';

window.store = store;

export default class Chat extends Component {
  render() {
    return (
      <Provider key={module.hot ? Date.now() : store} store={store}>
        <div class="container clearfix">
          <ChatWrap />
        </div>
      </Provider>
    )
  }
}
