import React from 'react';
import { render } from 'react-dom';
import Chat from 'containers/Chat';
import { AppContainer } from 'react-hot-loader';

import ws from 'utils/ws';
window.ws = ws;

import 'assets/styles/style.scss';

localStorage.removeItem('auth')

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#mount_place')
  )
}


renderApp(Chat)


if(module.hot) {
  module.hot.accept('./containers/Chat', () => { renderApp(Chat) })
}
